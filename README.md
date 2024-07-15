# Flight Path Tracker API

## Overview

This microservice API helps track a person's flight path based on a list of flights. The API sorts the flights to find the total flight path starting and ending at the respective airports.

## Endpoint

### POST /calculate

#### Request Body

The request body should be a JSON object containing a list of flights, where each flight is represented by a source and destination airport code.

Example:
```json
{
  "flights": [["IND", "EWR"], ["SFO", "ATL"], ["GSO", "IND"], ["ATL", "GSO"]]
}
