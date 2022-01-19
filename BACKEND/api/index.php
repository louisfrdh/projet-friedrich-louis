<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';

$app = AppFactory::create();
$app->addBodyParsingMiddleware(); // permet lecture des body en JSON

$app->get('/api/hello/{login}', function (Request $request, Response $response, $args) {
    global $entityManager;
    $clientRepository = $entityManager->getRepository('Client');
    $clients = $clientRepository->findAll();

    $response->getBody()->write($args['login']);
    return $response;
});

$app->get('/api/client/{id}', function (Request $request, Response $response, $args) {
    $id = $args['id'];
    global $entityManager;
    $clientRepository = $entityManager->getRepository('Client');
    $client = $clientRepository->find($id);

    $response->getBody()->write ($client->getNom());
    return $response;
});

$app->post('/api/client', function (Request $request, Response $response, $args) {
    $body = $request->getParsedBody(); // Parse le body
    global $entityManager;
    $clientRepository = $entityManager->getRepository('Client');
    
    $client = new Client();
    $client->setNom($body['nom']);
    $client->setPrenom($body['prenom']);
    $client->setLogin($body['login']);
    $client->setPassword($body['password']);

    $entityManager->persist($client);
    $entityManager->flush();
    
    $response->getBody()->write($client->getLogin());
    return $response;
});

$app->put('/api/client/{id}', function (Request $request, Response $response, $args) {
    $id = $args['id'];
    $body = $request->getParsedBody(); // Parse le body
    global $entityManager;
    $clientRepository = $entityManager->getRepository('Client');
    $client = $clientRepository->find($id);
    
    $client->setNom($body['nom']);
    $client->setPrenom($body['prenom']);
    $client->setLogin($body['login']);
    $client->setPassword($body['password']);
    
    // $entityManager->persist($client);
    $entityManager->flush();

    $response->getBody()->write($client->getLogin());
    return $response;
});

$app->delete('/api/client/{id}', function (Request $request, Response $response, $args) {
    $id = $args['id'];
    global $entityManager;
    $clientRepository = $entityManager->getRepository('Client');
    $client = $clientRepository->find($id);

    $entityManager->remove($client);
    $entityManager->flush();
    
    $response->getBody()->write("client supprimé");
    return $response;
});

// Run app
$app->run();

// /!\ enlever vendor du softdeploy.sh et reecrire deploy.sh /!\ \\
