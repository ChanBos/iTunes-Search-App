// Requiring Express.
const express = require("express");
// Requiring fetch from Node Fetch.
const fetch = require("node-fetch");

/**
 * Requesting the information from the iTunes API media and returning the response with the information. The search is based on the name of the
 * search query (eg. Korn (music artist) or Blackhat (movie name)) and the type of media that the search results should be derived from (eg.
 * music, movie, etc.).
 * Limiting the search results to 28.
 */

exports.getController = (req, res) => {
  fetch(
    `https://itunes.apple.com/search?term=${req.query.name}&limit=28&entity=${req.query.type}`
  )
    .then((res) => res.json())
    .then((results) => {
      res.send(results);
    });
};
