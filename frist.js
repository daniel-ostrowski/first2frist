/*
    Copyright 2018 Daniel Ostrowski

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// The following method was written with significant help from
// http://blog.alexanderdickson.com/javascript-replacing-text
var recursiveReplace = function(parent, regex, newText) {
    var children = parent.childNodes;
    for (var i = 0; i < children.length; i++) {
	child = children[i];
	// if the child is not a text node but may contain a text node
	if (child.nodeType == 1) {
	    recursiveReplace(child, regex, newText);
	}
	// if the child is a text node, replace occurences of the regex within
	// the text.
	else if (child.nodeType == 3) {
	    child.nodeValue = child.nodeValue.replace(regex, newText);
	}
	// otherwise the node does not matter
    };
}
recursiveReplace(document.body, /^(.+\s+)?(first|1st)/ig, "$1frist");
