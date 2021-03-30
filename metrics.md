# Metrics

We'll be gathering metrics to measure the growth of the working group, the channels, and the individual shows themselves.

## Working Group

- Members
- Contributors
- Proposals
- Number of Shows, by stage, by X

## Shows

In order to ensure that we're producing the right content for the Cloud Native audience, we'll be tracking the viewership of each show and working with the host to ensure their content is timely, relevant, entertaining, and engaging.

Automation is in-place to kick-off within 3 minutes of a stream starting on Twitch.tv, initiated by the Twitch.tv webhook integration. This webhook notifies [Pipedream](https://www.pipedream.com) of the new stream.

From there, Pipedream starts a 1-minute tick that triggers itself on a recursive loop until it is determined that the stream is no longer active. On each of these ticks, the code will lookup the Twitch.tv APIs for:

- Number of viewers

We'd like to see this expanded, help wanted.

At the end of each tick, the viewer numbers are written to [InfluxDB Cloud](https://cloud2.influxdata.com).

Access to Pipedream and InfluxDB Cloud is available on request, and InfluxDB will be "GitOps"'d, and available from [here](https://github.com/cncf/cloudnativetv-metrics) soon.

### Help Wanted

We'd like to see more metrics scraped from the Twitch.tv API to measure engagement of the episodes, and perhaps Twitter mentions too.

A lookup to the "active stream" from ClickUp is currently in progress.
