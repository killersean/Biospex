<?php  namespace App\Repositories\Contracts;

interface Property extends Repository
{
    public function findByQualified($name);

    public function findByShort($name);
}
