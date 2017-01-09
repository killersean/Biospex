<?php namespace App\Repositories\Contracts;

interface Repository
{
    public function get(array $columns = ['*']);

    public function first(array $columns = ['*']);
    
    public function all(array $columns = ['*']);
    
    public function find($id, array $columns = ['*']);
    
    public function pluck($value, $index);

    public function count();

    public function create(array $attributes);

    public function update(array $attributes, $id);

    public function updateOrCreate(array $attributes, array $values);

    public function delete($id);

    public function save($record);
    
    public function with(array $with = []);
    
    public function where(array $where = []);
    
    public function orWhere(array $where = []);

    public function whereIn($field, array $values);

    public function whereNotIn($field, array $values);

    public function whereHas($relation, array $where = []);

    public function orWhereHas($relation, array $where = []);

    public function whereRaw(array $where = []);

    public function whereNull($column);

    public function whereNotNull($column);

    public function whereDate(array $where = []);

    public function orWhereDate(array $where = []);

    public function has($relation, $condition = null, $value = null);

    public function doesntHave($relation, $boolean = 'and', $callback = null);

    public function groupBy($value);

    public function orderBy(array $order_by = []);

    public function limitOffset($limit, $offset = 0);
    
    public function trashed($id = null);
    
    public function forceDelete($id);

    public function restore($id);

    public function truncate();
}
