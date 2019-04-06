<?php
header('Content-type:application/json;charset=utf-8');
require __DIR__ . '/vendor/autoload.php';

use \Goose\Client as GooseClient;

//@TODO Check request coming from.

if(!isset($_GET['url'])) {
  echo json_encode([
    'error' => 'Missing key'
  ]);
  exit;
}

try {
  $url = trim($_GET['url']);
  $url = urldecode($url);
  $goose = new GooseClient();
  $doc = $goose->extractContent($url);
  echo json_encode([
    'description' => $doc->getMetaDescription(),
    'image' => $doc->getTopImage()->getImageSrc()
  ]);
} catch(Exception $e) {
  echo json_encode([
    'error' => 'Cannot extract'
  ]);
}
exit;
