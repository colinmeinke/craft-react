<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    '*' => [
        'defaultWeekStartDay' => 0,
        'enableCsrfProtection' => true,
        'omitScriptNameInUrls' => true,
        'cpTrigger' => 'admin',
        'securityKey' => getenv('SECURITY_KEY'),
    ],
    'dev' => [
        'uiUrl' => 'http://craft-react.test',
        'siteUrl' => null,
        'devMode' => true,
    ],
    'staging' => [
        'uiUrl' => null,
        'siteUrl' => null,
    ],
    'production' => [
        'uiUrl' => null,
        'siteUrl' => null,
    ],
];
