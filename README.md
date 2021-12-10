# Project Overview

## Project Name

Squirrel Safari

## Project Description

This project will take users on a virtual Squirrel Safari/walk through Central Park by providing an interactive interface to the stories about squirrels collected during the [2018 Central Park Squirrel Census](https://www.thesquirrelcensus.com/). The application will interact with the [API provided by NYC Open Data](https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Stories/gfqj-f768) and will present a randomly selected observation upon loading. Users will then be able to load a new, randomly selected observation by clicking a "walk to the next squirrel"-button! The project will also correctly cite all the sources for the data presented. 

## API and Data Sample

The application will interact with the [API provided by NYC Open Data](https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Stories/gfqj-f768). The following is a sample of the data provided by the API.

```Json

[
  {
        "hectare": "42H",
        "shift": "PM",
        "date": "10142018",
        "note_squirrel_park_stories": "grey body, red head — exquisite. These two appeared to be engaging in a flirtatious yet combative ritual, ending up out of sight high up in a tree.",
        "story_topic_squirrel": true
  },    
]
```

## Wireframes

Click [here](https://photos.app.goo.gl/FmghLBy3GWLmyimSA) for wireframe.


### MVP/PostMVP

This project's MVP will
- fetch data from the API,
- render data from the API,
- randomly select one of the stories provided by the API,
- present the user information about when and where the observation was made and
- allow the user to load a new, randomly selected observation by clicking a button.

A post-MVP might
- allow users to search observations by one of the following keys: date, location or observation content,
- allow users to store favorite observations, and
- present those observations marked as favorites in a separate window.


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Dec 13| Project Approval | Incomplete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Dec 14| Initial Clickable Model  | Incomplete
|Dec 16| MVP | Incomplete
|Dec 17| Presentations | Incomplete

## Priority Matrix

Click [here](https://photos.app.goo.gl/XEKToGNN3T3xC4ws7) for priority matrix.

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Site layout | 1 | 4hrs| tbd | tbd |
| Site styling | 2 | 4hrs| tbd | tbd |
| Familiarzing with API | 1 | 2hrs| tbd | tbd |
| Fetch data from API | 1 | 4hrs| tbd | tbd |
| Render fetched data - DOM manipulation | 1 | 4hrs| tbd | tbd |
| Button functionality | 1 | 4hrs| tbd | tbd |
| Button styling | 3 | 1hrs| tbd | tbd |
| Responsive styling | 2 | 4hrs| tbd | tbd |
| Deployment | 2 | 2hrs| tbd | tbd |
| Commits and Pushes | 4 | 1hrs| tbd | tbd |
| Debugging | 3 | 3hrs| tbd | tbd |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
