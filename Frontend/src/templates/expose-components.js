import React from 'react';
import * as Preact from "preact";
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import { JssProvider, SheetsRegistry } from 'react-jss';
import Helmet from 'react-helmet';

import * as Components from "./components";
import { Pages } from "./pages";
import '../js';

global.React = React;
global.Preact = Preact;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

global.ReactJss = { JssProvider, SheetsRegistry };
global.Helmet = Helmet;

global.Components = Components;
global.Pages = Pages;