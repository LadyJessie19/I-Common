/**
 * @module ar_app/js/common-i.js
 * @fileoverview Home of the common parts to be injected into the HTML pages of the App.
 * @author Miguel Gastelumendi <mgd@satelier.com.br>
 * @copyright Software Atelier 2022
 * @version 2022.10.06
 */

// 'Global' sections
const sections = {};
/*  */
/**
 * @typedef {Object<string, string|number>} IcVariables
 */

/**
 * Replaces keys for values
 * @param {string} sHtml
 * @param {IcVariables?} dicVar
 */
const icReplace = (sHtml, dicVar) => {
  if (dicVar == null) {
    return sHtml;
  }
  // TODO
  return sHtml;
};

/**
 * Injects an array of sections as child nodes to the target element (whose ID is sIdTarget)
 * after replacing variables from the dictionary.
 * @param {string} sIdTarget
 * @param {Array<string>} aSections
 * @param {IcVariables?} dicVar
 */
const injectCommon = (sIdTarget, aSections, dicVar) => {
  const tagById = (/** @type{string} */ sId) => document.getElementById(sId);
  // TODO: create an hidden div with to keep track of the injected sections
  const tagGlobalTarget = document.body;
  let tagDefaultTarget = (sIdTarget == null || ("" + sIdTarget).trim() == "") ? null : tagById(sIdTarget);
  if (tagDefaultTarget == null) {
    tagDefaultTarget = tagGlobalTarget;
  }
  // Compatibility aSections.forEach((item) => {
  for (let i = 0; i < aSections.length; i++) {
    const item = aSections[i];

    // an item is:  sectionKey || sectionKey>target
    const aKeyAndTarget = ("" + item).split(">");
    const sKey = aKeyAndTarget[0].trim();
    const sTarget = aKeyAndTarget.length > 1 ? aKeyAndTarget[1].trim() : "";
    let tagTmp;
    const tagTarget = /** @type {HTMLElement} */ (
      ((sTarget == "") || (null == (tagTmp = tagById(sTarget)))) ? tagDefaultTarget : tagTmp
    );
    if ((tagTarget != null) && (Object.keys(sections).find(s => s == sKey))) {
      const tag = document.createElement("div");
      const sHtml = icReplace(sections[sKey], dicVar);
      tag.innerHTML = sHtml;
      tagTarget.appendChild(tag);
    }
  }; //}
};

/**
 * Reads the configuration from an attribute of the element (whose ID is sIdConfig)
 * and injects it into the element sIdTarget.
 * @param {string} sIdTarget
 * @param {string} sIdConfig
 * @param {string} sAttribSec
 * @param {string} sAttribVar
 */
const injectCommonFromTag = (sIdTarget, sIdConfig, sAttribSec, sAttribVar) => {
  const tagConfig = document.getElementById(sIdConfig);
  if (tagConfig == null) {
    return;
  }
  const sSections = tagConfig.getAttribute(sAttribSec);
  let aSections = [];
  if (sSections == null) {
    return;
  } else if (sSections == "*") {
    // inject all global `sections` // TODO: check:
    //Compatibility Object.keys(sections).forEach((s) => aSections.push(s));
    for (let i = 0; i < Object.keys(sections).length; i++) { aSections.push(sections[i]) }
  } else {
    aSections = sSections
      .split(",")
      .map(e => e.trim())
      .filter(e => e != "");
  }
  const dicVar = /** @type {IcVariables} */ ({});
  injectCommon(sIdTarget, aSections, dicVar);
};

//-----------------------
/**
 * » ID of an element that have the configuration attributes.
 * » It's usually the same as the script (see below for an example).
 */
const icIdConfig = "ar:ic-config";

/**
 * » Configuration attribute: `Target`.
 * » Default target element's id, optional.
 */
const icIdTarget = "ar:ic-target";

/**
 * » Configuration attribute: `Sections`.
 * » A list of sections (separate by ,) to inject.
 * » If the attribute's value is '*' or no attribute at all, then
 *   all sections are injected.
 * » A section is one of the string properties of the class `sections`.
 *   See above (fist code line) `const sections = {};`
 * » Optionally, each item can be follow by a gt (>) and a target's id.
 * » If no '> target id' is specified, the default 'Target'
 *   (see attribute `Target`) will be used.
 * » If there is no default 'Target' or only the gt (>) is used, the target
 *    will be `body`.
 */
const icAttribSections = "data-ar:ic-sec";

/**
 * » Configuration attribute: `Dictionary`.
 * » A dictionary<key, value> to replace variables in the HTML code
 * » not implemented
 */
const icAttribDictionary = "data-ar:ic-dic";

{
  injectCommonFromTag(
    icIdTarget,
    icIdConfig,
    icAttribSections,
    icAttribDictionary
  );
}
//eof
