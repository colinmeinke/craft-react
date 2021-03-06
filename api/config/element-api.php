<?php

use craft\elements\Entry;
use craft\helpers\UrlHelper;
use craft\helpers\HeaderHelper;

$pageTransformer = function(Entry $entry) {
    \Craft::$app->response->headers->set(
        'Access-Control-Allow-Origin',
        \Craft::$app->config->general->uiOrigin
    );

    return [
        'title' => $entry->title,
        'content' => $entry->pageContent,
    ];
};

return [
    'endpoints' => [
        'home.json' => [
            'elementType' => Entry::class,
            'criteria' => ['section' => 'home'],
            'one' => true,
            'transformer' => $pageTransformer,
            'pretty' => true,
        ],
        'about.json' => [
            'elementType' => Entry::class,
            'criteria' => ['section' => 'about'],
            'one' => true,
            'transformer' => $pageTransformer,
            'pretty' => true,
        ],
        '404.json' => [
            'elementType' => Entry::class,
            'criteria' => ['section' => 'error404'],
            'one' => true,
            'transformer' => $pageTransformer,
            'pretty' => true,
        ]
    ],
];
