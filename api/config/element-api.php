<?php

use craft\elements\Entry;
use craft\helpers\UrlHelper;
use craft\helpers\HeaderHelper;

return [
    'endpoints' => [
        'home.json' => [
            'elementType' => Entry::class,
            'criteria' => ['section' => 'home'],
            'one' => true,
            'transformer' => function(Entry $entry) {
                \Craft::$app->response->headers->set('Access-Control-Allow-Origin', 'http://craft-react.test');

                return [
                    'title' => $entry->title,
                    'content' => $entry->pageContent,
                ];
            },
            'pretty' => true,
        ],
        'about.json' => [
            'elementType' => Entry::class,
            'criteria' => ['section' => 'about'],
            'one' => true,
            'transformer' => function(Entry $entry) {
                \Craft::$app->response->headers->set('Access-Control-Allow-Origin', 'http://craft-react.test');

                return [
                    'title' => $entry->title,
                    'content' => $entry->pageContent,
                ];
            },
            'pretty' => true,
        ],
    ],
];
