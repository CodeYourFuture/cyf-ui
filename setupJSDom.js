/* eslint-disable no-global-assign */
import { JSDOM } from "jsdom";
import { configure } from "@testing-library/dom";
import 'jest-styled-components'

configure({ testIdAttribute: "data-automation-id" });

const dom = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>");

window = dom.window;
document = dom.window.document;
