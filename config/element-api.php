<?php

use craft\elements\Entry;
use craft\helpers\UrlHelper;

return [
    'endpoints' => [
        'home.json' => [
            'elementType' => Entry::class,
            'criteria' => ['section' => 'home'],
            'transformer' => function(Entry $entry) {
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
            'transformer' => function(Entry $entry) {
                return [
                    'title' => $entry->title,
                    'content' => $entry->pageContent,
                ];
            },
            'pretty' => true,
        ],
    ],
];
