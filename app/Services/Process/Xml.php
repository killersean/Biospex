<?php

namespace App\Services\Process;

use DOMDocument;
use DOMXPath;
use RuntimeException;

class Xml
{

    /**
     * @var null
     */
    private $xml;

    /**
     * @var
     */
    private $xpath;

    /**
     * @var string
     */
    private $encoding = 'UTF-8';

    /**
     * @var string
     */
    private $version = '1.0';

    /**
     * Load xml string and return
     *
     * @param $input_xml
     * @return string
     * @throws RuntimeException
     */
    public function load($input_xml)
    {
        $this->xml = new DOMDocument($this->version, $this->encoding);
        $this->xml->preserveWhiteSpace = false;

        $parsed = $this->xml->load($input_xml);
        if (! $parsed) {
            throw new RuntimeException(trans('errors.loading_xml'));
        }

        $this->xpath = new DOMXpath($this->xml);
        $this->xpath->registerNamespace('ns', $this->xml->documentElement->namespaceURI);
        $this->xpath->registerNamespace('php', 'http://php.net/xpath');
        $this->xpath->registerPhpFunctions(); // Allow all PHP functions

        return $this->xml->saveXML();
    }

    /**
     * Perform query on dom document
     *
     * @param $query
     * @param bool $get
     * @return mixed
     */
    public function xpathQuery($query, $get = false)
    {
        if ( ! $get) {
            return $this->xpath->query($query);
        }

        return $this->xpath->query($query)->item(0);
    }

    /**
     * Perform xpath evaluate on query.
     *
     * @param $query
     * @param $element
     * @return mixed
     */
    public function evaluate($query, $element)
    {
        return $this->xpath->evaluate($query, $element);
    }

    /**
     * Convert an XML to Array
     *
     * @param $xml
     * @return mixed
     */
    public function &createArray($xml)
    {
        $array[$this->xml->documentElement->tagName] = self::convert($this->xml->documentElement);

        //$this->xml = null;    // clear the xml node in the class for 2nd time use.
        return $array;
    }

    /**
     * Convert an Array to XML
     *
     * @param mixed $node - XML as a string or as an object of DOMDocument
     * @return mixed
     */
    private function &convert($node)
    {
        $output = [];

        switch ($node->nodeType) {
            case XML_CDATA_SECTION_NODE:
                $output['@cdata'] = trim($node->textContent);
                break;

            case XML_TEXT_NODE:
                $output = trim($node->textContent);
                break;

            case XML_ELEMENT_NODE:

                // for each child node, call the covert function recursively
                for ($i = 0, $m = $node->childNodes->length; $i < $m; $i++) {
                    $child = $node->childNodes->item($i);
                    $v = self::convert($child);
                    if (isset($child->tagName)) {
                        $t = $child->tagName;

                        // assume more nodes of same kind are coming
                        if (! isset($output[$t])) {
                            $output[$t] = [];
                        }
                        $output[$t][] = $v;
                    } else {
                        //check if it is not an empty text node
                        if ($v !== '') {
                            $output = $v;
                        }
                    }
                }

                if (is_array($output)) {
                    // if only one node of its kind, assign it directly instead if array($value);
                    foreach ($output as $t => $v) {
                        if (is_array($v) && count($v) == 1) {
                            $output[$t] = $v[0];
                        }
                    }
                    if (empty($output)) {
                        //for empty nodes
                        $output = '';
                    }
                }

                // loop through the attributes and collect them
                if ($node->attributes->length) {
                    $a = [];
                    foreach ($node->attributes as $attrName => $attrNode) {
                        $a[$attrName] = (string) $attrNode->value;
                    }
                    // if its an leaf node, store the value in @value instead of directly storing it.
                    if (! is_array($output)) {
                        $output = ['@value' => $output];
                    }
                    $output['@attributes'] = $a;
                }
                break;
        }

        return $output;
    }
}
