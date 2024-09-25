<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // Campos que se pueden asignar de manera masiva
    protected $fillable = ['title', 'description'];
}
