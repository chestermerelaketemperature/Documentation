define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__Users_Sean_Grover_OneDrive_Projects_workspace_Server_Handler_apidoc_main_js",
    "groupTitle": "C__Users_Sean_Grover_OneDrive_Projects_workspace_Server_Handler_apidoc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/latest",
    "title": "Latest Snapshot",
    "version": "0.0.1",
    "name": "getLatest",
    "group": "Snapshots",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "manual",
            "description": "<p>If this snapshot was taken manually or false if our controller made it.</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>ID of this snapshot.</p>"
          },
          {
            "group": "Success 200",
            "type": "Instant",
            "optional": false,
            "field": "creation",
            "description": "<p>The Instant this snapshot was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "waterTemperature",
            "description": "<p>The temperature of the water.</p>"
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "airTemperature",
            "description": "<p>The temperature of the air.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"manual\": false,\n  \"id\": 1\n  \"creation\": \"2019-07-26T05:56:05.518Z\"\n  \"waterTemperature\": 67.5\n  \"airTemperature\": 21.1\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "$(document).ready(function() {\n\t$.ajax({\n\t\turl: \"http://api.chestermerelaketemperature.com/latest\"\n\t}).then(function(data) {\n\t\t$('.snapshot-creation').append(data.creation);\n\t\t$('.snapshot-air').append(data.airTemperature);\n\t\t$('.snapshot-water').append(data.waterTemperature);\n\t});\n});",
        "type": "js"
      }
    ],
    "filename": "./src/main/java/com/chestermere/lake/temperature/controllers/LatestController.java",
    "groupTitle": "Snapshots"
  }
] });
