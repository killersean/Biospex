<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateWorkflowManager extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workflow_manager', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('workflow_id');
            $table->foreign('workflow_id')->references('id')->on('workflows')->onDelete('cascade');
            $table->unsignedInteger('expedition_id');
            $table->foreign('expedition_id')->references('id')->on('expeditions')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();

            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('workflow_manager');
    }
}
