<?php

namespace App\Exceptions;

use Symfony\Component\HttpKernel\Exception\HttpException;

class OverlappingOpeningException extends HttpException
{
    public function __construct()
    {
        parent::__construct(412, 'Opening overlaps with an existing one.');
    }
}
