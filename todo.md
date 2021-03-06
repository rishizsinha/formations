
# Todo List
Check here for current tasks to be completed!

## Stage 1: V Basic Stage Design
- [x] Build Stage Div
- [x] Add input fields for stage dimensions (IN FEET)
- [x] Make button to add new circles=people
- [x] Add functionality for add person button
- [x] Make circles draggable

~~Upon button click submitting dimension change, resize height of stage, but keep width the same~~
~~Function to calculate circle radii given stage dimensions correpsonding to people. Assume normal person width (diameter) is 2 feet. and transition~~

~~OR~~

- [x] Upon button click submitting dimension change, resize stage rectangle, 
keeping circle radii the same
- [x] function to calculate new dimensions and transition

## Stage 2: Stage Design
- [ ] Add markers at center, quarter and eighths
- [ ] Add generic gridlines to stage (every 2-4 feet? experiment) (preferably light gray, ). See http://stackoverflow.com/questions/14208673/how-to-draw-grid-using-html5-and-canvas-or-svg ?

## Stage 3: Naming People
- [x] Add an input field near addPerson button to allow name/initials input
- [x] Have labels functionally added to circles and drag with circle
- [x] Change addPerson click function to add a DIV containing text+circle instead
of adding just a circle (http://stackoverflow.com/questions/13615381/d3-add-text-to-circle) {ENDED UP IMPLEMENTING AS 'g' SVG ELEMENT}
- [ ] Keep a table to the RIGHT of the stage containing a list of all
people added to the stage {IMPLEMENT AS HTML TABLE}
- [ ] Upon hovering over name in tracker div, "highlight" the corresponding circle
(e.g. just change the fill for now) {IMPLEMENT USING 'MOUSEOVER' AND 'MOUSEOUT' EVENTS}
- [ ] Keep a button to remove people in table, for each person

## Stage 4: Personal Axes

This is one of the hardest stages I think. Essentially whenever a person is created, they should have an x- and y- axis created to explicitly show their relative positions to people. 

Specifically though, the challenge lies in how to represent this. A personal axis can be represented as a part of the person's "group" (which also consists of their circle shape and text name label). But if you want to put multiple people onto an axis, then it is unclear whether any axes group should be a level higher than people groups so that people can be added to axes groups, or whether the axes paths should remain a part of the people, and each changed individually for all people deemed to be on an axis group.
 
Update 12/28/15: SVG divided into "people" and "axes" groups, with corresponding
names to identify sub-elements. 

Update 12/28/15: Stage simplified to fully-completed personal axes

- [x] build personal axes using svg "path" elements
- [x] have the axes shift up/down left/right with dragging people
- [x] implement "snapping" (e.g. a way to suggest that circles be aligned with one another). This can be done by have it so that if a circle while being dragged crosses the axes of another circle, will lock into that axis for some short buffer period of drag on either side at which point after it will "break free" on either side

## Stage 5: Review 1
- [ ] Finish Stage 2 Gridding
- [ ] Finish Stage 3 Tabling
- [ ] Resolve Stage Reshaping Issues

## Stage 6: Group Attributes
- [ ] Design way to add attributes and assign to people
{add further after design built}

## Stage 7: Group Axes
- [x] Implement group axis movement via checking for equivalent axis position elements

## Stage 8: Rotational Axes

# End Phase 1 

## Stage 8: Pages
- [ ] Implement Multiple Formation pages
- [ ] implement animations between formations 

# ~ Fin ~
