<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
require __DIR__ . '/../vendor/autoload.php';
$app = AppFactory::create();
$app->get('/api/hello/{login}', function (Request $request, Response $response, $args) {
    $response->getBody()->write($args['login']);
    return $response;
    });

// require '/vendor/autoload.php';
// $app = new \Slim\App();

// $app->get('/client/{id}', 'getClient');
// $app->post('/client', 'addClient');
// $app->put('/client/{id}', 'updateClient');
// $app->delete('/client/{id}', 'deleteClient');


// // Run app
$app->run();

// function getClient($request,$response,$args) {
//     $id = $args['id'];
//     // RECHERCHE
    
//     return $response->getBody()->write (json_encode($client));
// }
    
// function addClient($request,$response,$args) {
//     $body = $request->getParsedBody(); // Parse le body
//     $nom = $body['nom']; // Data du formulaire
    
//     // AJOUT
    
//     return $response->getBody()-> write ("");
// }

// function updateClient($request,$response,$args) {
//     $id = $args['id'];
//     $body = $request->getParsedBody();
//     $nom = $body['nom'];
//     // Mise a jour
    
//     return $response->getBody()-> write ("");
// }

// function deleteClient($request,$response,$args) {
//     $id = $args['id'];
//     // Suppression
    
//     return $response->getBody()->write ("");
// }
?>