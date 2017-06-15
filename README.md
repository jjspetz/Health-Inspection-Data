# Houston-Hackathon

## Do I Want to Eat There
It's a web app that displays a map of houston restuatants (and other establishment's that sell food) and lets you check if they have passed their latest health inspection.

### Technology
Javascript,   
HTML/CSS,  
Django,  
Postgres,  
Google Fusion Tables

### Preview
![Doiwanttoeatthere.com](/preview.png)

## Live Demo
[https://doiwanttoeatthere.com/](https://doiwanttoeatthere.com/)

### Challenges
Problem: We built a back-end for our site but were not able to connect our server to our domain correctly.
Solution: We temporarily solved this by using Google Fusion Tables and javascript but this has left our project less responsive and currently it does not work on mobile.

Problem: Does not work on mobile.
Solution: We modified the iframe parameters to be mobile friendly.

Problem: Multiple entries were found for individual restaurants with different inspection outcomes.
Solution: We cleaned up the data to exclude all but the most recent inspection.

Problem: The process of updating the data due to many passes at cleaning the data up was clunky and inefficient.
Solution: The Fusion Table is synced to a Google Sheet, allowing for easier updating of the data.
