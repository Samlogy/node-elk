# ELK

*** Logging ***
Elk

http://localhost:9200 
http://localhost:5601
http://localhost:3002


## filebeat
chmod 644 logging/filebeat.yml
sudo chown root:root logging/filebeat.yml

## Kibana
1. go to `http://localhost:5601`
2. Go to Management > Stack Management > Index Patterns.


1. Configure Elasticsearch Index Pattern in Kibana
Access Kibana at http://localhost:5601.

Click Create Index Pattern.
Use node-app-logs-* as the index pattern, which matches the index set in the Logstash configuration (logstash.conf).
Define @timestamp as the time filter field.
Click Create Index Pattern.
Now Kibana will be able to visualize the logs from the Node.js app stored in Elasticsearch.

2. Discover Logs in Kibana
To explore logs in Kibana:

Go to Discover in Kibana.
Select the node-app-logs-* index pattern.
You should now see logs from the Node.js application, including the requests made to your new /api/test endpoint, displayed in the log entries.

3. Create a Visualization in Kibana
You can create visualizations to analyze the logs coming from your Node.js app.

Example: Create a Visualization for the Number of Requests
Go to Visualize > Create Visualization in Kibana.
Choose a Bar Chart (or another type, such as a line chart).
For the Index Pattern, select node-app-logs-*.
In the Y-axis, select Count to show the number of log entries (each log entry represents a request).
In the X-axis, you can set it to Date Histogram to visualize the logs over time.
Save your visualization and add it to a dashboard for further analysis.

4. Configure and Test Alerts in Kibana
Go to Stack Management > Rules and Connectors.
Click Create Rule and select Elasticsearch query.
Define a query that monitors the logs and triggers an alert based on your needs (e.g., a specific error message or too many requests).
Configure the actions (like sending a notification to Slack or Telegram, as discussed before).

5. Testing the Setup

go to kibana
management > stack management
create index (si notre index n'est pas dans la liste)
cliquer sur l'index > discover index