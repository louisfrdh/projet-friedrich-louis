<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
    'host' => 'tai.db.elephantsql.com',
    'driver' => 'pdo_pgsql',
    'user' => 'odpbaryq',
    'password' => 'eH4CRAmjlQZv2zS7DK9t8EgQqg63EbXq',
    'dbname' => 'odpbaryq',
    'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);