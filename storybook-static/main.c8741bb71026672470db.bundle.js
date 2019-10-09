(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    311: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51),
        _testdata_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77),
        _testdata_edges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78),
        _components_SampleNodeRenderer_SampleNodeRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
      __webpack_exports__.a = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.c, {
          width: 0.9 * window.innerWidth,
          height: 0.9 * window.innerHeight,
          nodes: _testdata_nodes__WEBPACK_IMPORTED_MODULE_2__.a,
          edges: _testdata_edges__WEBPACK_IMPORTED_MODULE_3__.a,
          renderNode: function renderNode(nodeData) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_SampleNodeRenderer_SampleNodeRenderer__WEBPACK_IMPORTED_MODULE_4__.a,
              nodeData,
            );
          },
          nodeWidth: 300,
          nodeHeight: 50,
        });
      };
    },
    317: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51),
        _testdata_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77),
        _testdata_edges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78),
        _components_SampleNodeRenderer_SampleNodeRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79),
        _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components__WEBPACK_IMPORTED_MODULE_1__.d,
          null,
        );
      __webpack_exports__.a = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components__WEBPACK_IMPORTED_MODULE_1__.b,
            null,
            _ref,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.c, {
              width: 0.9 * window.innerWidth,
              height: 0.9 * window.innerHeight,
              nodes: _testdata_nodes__WEBPACK_IMPORTED_MODULE_2__.a,
              edges: _testdata_edges__WEBPACK_IMPORTED_MODULE_3__.a,
              renderNode: function renderNode(nodeData) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_SampleNodeRenderer_SampleNodeRenderer__WEBPACK_IMPORTED_MODULE_4__.a,
                  nodeData,
                );
              },
              nodeWidth: 300,
              nodeHeight: 50,
              onEdgesUpdate: function onEdgesUpdate(edges) {
                console.log(edges);
              },
            }),
          ),
        );
      };
    },
    318: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51),
        _testdata_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77),
        _testdata_edges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78),
        _components_SampleNodeRenderer_SampleNodeRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
      __webpack_exports__.a = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components__WEBPACK_IMPORTED_MODULE_1__.b,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components__WEBPACK_IMPORTED_MODULE_1__.a,
              null,
              function(_ref) {
                var mode = _ref.mode,
                  setToAddEdgeMode = _ref.setToAddEdgeMode,
                  setToDeleteEdgeMode = _ref.setToDeleteEdgeMode,
                  escapeCurrentMode = _ref.escapeCurrentMode;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('h1', null, 'Current Mode: ', mode),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    { onClick: setToAddEdgeMode },
                    'Custom Add Edge Button',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    { onClick: setToDeleteEdgeMode },
                    'Custom Delete Edge Button',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    { onClick: escapeCurrentMode },
                    'Custom Escape Button',
                  ),
                );
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.c, {
              width: 0.9 * window.innerWidth,
              height: 0.9 * window.innerHeight,
              nodes: _testdata_nodes__WEBPACK_IMPORTED_MODULE_2__.a,
              edges: _testdata_edges__WEBPACK_IMPORTED_MODULE_3__.a,
              renderNode: function renderNode(nodeData) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_SampleNodeRenderer_SampleNodeRenderer__WEBPACK_IMPORTED_MODULE_4__.a,
                  nodeData,
                );
              },
              nodeWidth: 300,
              nodeHeight: 50,
              onEdgesUpdate: function onEdgesUpdate(edges) {
                console.log(edges);
              },
            }),
          ),
        );
      };
    },
    319: function(module, exports, __webpack_require__) {
      __webpack_require__(320), __webpack_require__(429), (module.exports = __webpack_require__(430));
    },
    341: function(module, exports) {},
    430: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories() {
            __webpack_require__(629);
          }, module);
        }.call(this, __webpack_require__(233)(module));
    },
    51: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(25),
        __webpack_require__(97),
        __webpack_require__(91),
        __webpack_require__(630),
        __webpack_require__(34),
        __webpack_require__(173),
        __webpack_require__(68),
        __webpack_require__(631),
        __webpack_require__(96),
        __webpack_require__(138),
        __webpack_require__(5),
        __webpack_require__(236),
        __webpack_require__(632),
        __webpack_require__(32),
        __webpack_require__(175),
        __webpack_require__(35);
      var defineProperty = __webpack_require__(312),
        toConsumableArray = __webpack_require__(149),
        slicedToArray = __webpack_require__(59),
        react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        ReactKonva = __webpack_require__(22),
        v4 = __webpack_require__(313),
        v4_default = __webpack_require__.n(v4),
        Machine = __webpack_require__(304),
        actions = __webpack_require__(2),
        lib = __webpack_require__(314),
        GraphCoordinatorContext = react_default.a.createContext({}),
        stateMachine = Object(Machine.a)(
          {
            id: 'workflow',
            context: { nodes: [] },
            initial: 'view',
            states: {
              view: { on: { ADD_EDGE: 'addEdge', DELETE_EDGE: 'deleteEdge' } },
              addEdge: {
                initial: 'selectFirstNode',
                states: {
                  selectFirstNode: {
                    on: {
                      exit: ['selectNode'],
                      SELECT_NODE: { target: 'selectSecondNode', actions: 'selectNode' },
                      ESCAPE: 'finalize',
                    },
                  },
                  selectSecondNode: {
                    on: {
                      SELECT_NODE: { target: 'createEdge', actions: ['selectNode', 'addNewEdge'] },
                      ESCAPE: 'finalize',
                    },
                  },
                  createEdge: { on: { NOTIFY_EDGE_CREATED: 'finalize', NOTIFY_EDGE_NOT_CREATED: 'finalize' } },
                  finalize: { type: 'final' },
                },
                onDone: { target: 'view', actions: 'clearNodes' },
              },
              deleteEdge: {
                initial: 'selectFirstNode',
                states: {
                  selectFirstNode: {
                    on: {
                      exit: ['selectNode'],
                      SELECT_NODE: { target: 'selectSecondNode', actions: 'selectNode' },
                      ESCAPE: 'finalize',
                    },
                  },
                  selectSecondNode: {
                    on: {
                      SELECT_NODE: { target: 'deleteEdge', actions: ['selectNode', 'deleteSelectedEdges'] },
                      ESCAPE: 'finalize',
                    },
                  },
                  deleteEdge: { on: { NOTIFY_EDGE_DELETED: 'finalize', NOTIFY_EDGE_NOT_DELETED: 'finalize' } },
                  finalize: { type: 'final' },
                },
                onDone: { target: 'view', actions: 'clearNodes' },
              },
            },
          },
          {
            actions: {
              selectNode: Object(actions.b)({
                nodes: function nodes(context, event) {
                  return [].concat(Object(toConsumableArray.a)(context.nodes), [event.id]);
                },
              }),
              clearNodes: Object(actions.b)({
                nodes: function nodes() {
                  return [];
                },
              }),
            },
          },
        ),
        GraphCoordinator = function(props) {
          var _useMachine = Object(lib.useMachine)(stateMachine),
            _useMachine2 = Object(slicedToArray.a)(_useMachine, 3),
            machineState = _useMachine2[0],
            sendCommand = _useMachine2[1],
            machineService = _useMachine2[2];
          return react_default.a.createElement(
            GraphCoordinatorContext.Provider,
            { value: { machineState: machineState, sendCommand: sendCommand, machineService: machineService } },
            props.children,
          );
        };
      GraphCoordinator.displayName = 'GraphCoordinator';
      var GraphCoordinator_GraphCoordinator = GraphCoordinator;
      (GraphCoordinator.__docgenInfo = { description: '', methods: [], displayName: 'GraphCoordinator' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\GraphCoordinator\\GraphCoordinator.jsx'] = {
            name: 'GraphCoordinator',
            docgenInfo: GraphCoordinator.__docgenInfo,
            path: 'src\\components\\GraphCoordinator\\GraphCoordinator.jsx',
          });
      var Node = function(props) {
        var nodeGraphData = props.data.nodeGraphData,
          sendCommand = Object(react.useContext)(GraphCoordinatorContext).sendCommand;
        return react_default.a.createElement(
          react_default.a.Fragment,
          null,
          react_default.a.createElement(
            ReactKonva.Group,
            {
              draggable: !0,
              name: 'node-'.concat(nodeGraphData.id),
              x: nodeGraphData.x,
              y: nodeGraphData.y,
              onDragMove: function onDragMove(event) {
                event.currentTarget.moveToTop(),
                  props.onDragMove({ id: nodeGraphData.id, x: event.target.x(), y: event.target.y() });
              },
              onDragEnd: function onDragEnd(event) {
                props.onDragEnd({ id: nodeGraphData.id, x: event.target.x(), y: event.target.y() });
              },
              onClick: function onClick(event) {
                event.currentTarget.moveToTop(), sendCommand({ type: 'SELECT_NODE', id: nodeGraphData.id });
              },
            },
            props.renderNode(props.data),
          ),
        );
      };
      Node.defaultProps = { onDragMove: function onDragMove() {}, onDragEnd: function onDragEnd() {} };
      var Node_Node = Node;
      (Node.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Node',
        props: {
          onDragMove: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onDragEnd: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          renderNode: { type: { name: 'func' }, required: !0, description: '' },
          data: { type: { name: 'object' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\Node\\Node.jsx'] = {
            name: 'Node',
            docgenInfo: Node.__docgenInfo,
            path: 'src\\components\\Node\\Node.jsx',
          });
      var prop_types = __webpack_require__(33),
        prop_types_default = __webpack_require__.n(prop_types),
        shape =
          (prop_types_default.a.shape({
            nodeGraphData: prop_types_default.a.shape({
              id: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]).isRequired,
              x: prop_types_default.a.number,
              y: prop_types_default.a.number,
            }).isRequired,
          }),
          prop_types_default.a.shape),
        oneOfType = prop_types_default.a.oneOfType,
        string = prop_types_default.a.string,
        number = prop_types_default.a.number,
        Edge =
          (shape({
            id: oneOfType([string, number]),
            from: oneOfType([string, number]),
            to: oneOfType([string, number]),
          }),
          function(props) {
            var yOffset = props.nodeHeight / 2,
              offsetFrom = [props.from[0] + props.nodeWidth, props.from[1] + yOffset],
              offsetTo = [props.to[0], props.to[1] + yOffset];
            return react_default.a.createElement(ReactKonva.Line, {
              points: [].concat(offsetFrom, offsetTo),
              stroke: 'black',
            });
          });
      (Edge.displayName = 'Edge'), (Edge.defaultProps = {});
      var Edge_Edge = Edge;
      (Edge.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Edge',
        props: {
          from: { type: { name: 'arrayOf', value: { name: 'number' } }, required: !0, description: '' },
          to: { type: { name: 'arrayOf', value: { name: 'number' } }, required: !0, description: '' },
          nodeWidth: { type: { name: 'number' }, required: !0, description: '' },
          nodeHeight: { type: { name: 'number' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\Edge\\Edge.jsx'] = {
            name: 'Edge',
            docgenInfo: Edge.__docgenInfo,
            path: 'src\\components\\Edge\\Edge.jsx',
          });
      var AddEdgeInstructions = function() {
          var machineState = Object(react.useContext)(GraphCoordinatorContext).machineState;
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            machineState.matches('addEdge.selectFirstNode') &&
              react_default.a.createElement(ReactKonva.Text, {
                absolutePosition: [10, 10],
                fontSize: 18,
                text: 'Select the first node',
              }),
            machineState.matches('addEdge.selectSecondNode') &&
              react_default.a.createElement(ReactKonva.Text, {
                absolutePosition: [10, 10],
                fontSize: 18,
                text: 'Select the second node',
              }),
          );
        },
        DeleteEdgeInstructions = function() {
          var machineState = Object(react.useContext)(GraphCoordinatorContext).machineState;
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            machineState.matches('deleteEdge.selectFirstNode') &&
              react_default.a.createElement(ReactKonva.Text, {
                absolutePosition: [10, 10],
                fontSize: 18,
                text: 'Select the first node',
              }),
            machineState.matches('deleteEdge.selectSecondNode') &&
              react_default.a.createElement(ReactKonva.Text, {
                absolutePosition: [10, 10],
                fontSize: 18,
                text: 'Select the second node',
              }),
          );
        },
        _ref = react_default.a.createElement(AddEdgeInstructions, null),
        _ref2 = react_default.a.createElement(DeleteEdgeInstructions, null),
        WorkflowInstructions = function() {
          var machineState = Object(react.useContext)(GraphCoordinatorContext).machineState;
          return machineState
            ? react_default.a.createElement(
                ReactKonva.Layer,
                null,
                machineState.matches('addEdge') && _ref,
                machineState.matches('deleteEdge') && _ref2,
              )
            : null;
        };
      WorkflowInstructions.displayName = 'WorkflowInstructions';
      var WorkflowInstructions_WorkflowInstructions = WorkflowInstructions;
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null == arguments[i] ? {} : arguments[i]),
            i % 2
              ? ownKeys(source, !0).forEach(function(key) {
                  Object(defineProperty.a)(target, key, source[key]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(source).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
        return target;
      }
      (WorkflowInstructions.__docgenInfo = { description: '', methods: [], displayName: 'WorkflowInstructions' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\WorkflowInstructions\\WorkflowInstructions.jsx'] = {
            name: 'WorkflowInstructions',
            docgenInfo: WorkflowInstructions.__docgenInfo,
            path: 'src\\components\\WorkflowInstructions\\WorkflowInstructions.jsx',
          });
      var isEventFromNode = function(event) {
          return event.target.name().includes('node');
        },
        doesEdgeAlreadyMatch = function(edge, node1, node2) {
          return (
            (node1 === edge.edgeGraphData.from && node2 === edge.edgeGraphData.to) ||
            (node1 === edge.edgeGraphData.to && node2 === edge.edgeGraphData.from)
          );
        },
        doesNewEdgeNeedToBeAdded = function(edges, fromNodeId, toNodeId) {
          return (
            fromNodeId !== toNodeId &&
            !edges.some(function(edge) {
              return doesEdgeAlreadyMatch(edge, fromNodeId, toNodeId);
            })
          );
        },
        updateScaleBy = 1.1,
        NetworkGraph_ref = react_default.a.createElement(WorkflowInstructions_WorkflowInstructions, null);
      function NetworkGraph(props) {
        var coordinator = Object(react.useContext)(GraphCoordinatorContext),
          machineState = coordinator.machineState,
          machineService = coordinator.machineService,
          sendCommand = coordinator.sendCommand,
          _useState = Object(react.useState)(props.nodes),
          _useState2 = Object(slicedToArray.a)(_useState, 2),
          nodes = _useState2[0],
          setNodes = _useState2[1],
          _useState3 = Object(react.useState)(props.edges),
          _useState4 = Object(slicedToArray.a)(_useState3, 2),
          edges = _useState4[0],
          setEdges = _useState4[1],
          _useState5 = Object(react.useState)(1),
          _useState6 = Object(slicedToArray.a)(_useState5, 2),
          scale = _useState6[0],
          setScale = _useState6[1],
          _useState7 = Object(react.useState)({ x: 0, y: 0 }),
          _useState8 = Object(slicedToArray.a)(_useState7, 2),
          position = _useState8[0],
          setPosition = _useState8[1],
          onEdgesUpdate = props.onEdgesUpdate,
          onEdgeAdded = props.onEdgeAdded,
          onEdgeDeleted = props.onEdgeDeleted;
        return (
          Object(react.useEffect)(
            function() {
              machineService &&
                machineService.execute(machineState, {
                  addNewEdge: function addNewEdge() {
                    setEdges(function(prevEdges) {
                      var _machineState$context = Object(slicedToArray.a)(machineState.context.nodes, 2),
                        fromNode = _machineState$context[0],
                        toNode = _machineState$context[1];
                      if (!doesNewEdgeNeedToBeAdded(prevEdges, fromNode, toNode))
                        return sendCommand('NOTIFY_EDGE_NOT_CREATED'), prevEdges;
                      var newEdge = { edgeGraphData: { id: v4_default()(), from: fromNode, to: toNode } },
                        updatedEdges = [].concat(Object(toConsumableArray.a)(prevEdges), [newEdge]);
                      return (
                        onEdgesUpdate(updatedEdges),
                        onEdgeAdded(newEdge),
                        sendCommand('NOTIFY_EDGE_CREATED'),
                        updatedEdges
                      );
                    });
                  },
                  deleteSelectedEdges: function deleteSelectedEdges() {
                    setEdges(function(prevEdges) {
                      var _machineState$context2 = Object(slicedToArray.a)(machineState.context.nodes, 2),
                        node1 = _machineState$context2[0],
                        node2 = _machineState$context2[1],
                        indexOfEdgeToRemove = prevEdges.findIndex(function(edge) {
                          return doesEdgeAlreadyMatch(edge, node1, node2);
                        });
                      if (-1 === indexOfEdgeToRemove) return sendCommand('NOTIFY_EDGE_NOT_DELETED'), prevEdges;
                      var edgeToRemove = prevEdges.find(function(_, idx) {
                          return idx === indexOfEdgeToRemove;
                        }),
                        updatedEdges = prevEdges.filter(function(_, idx) {
                          return idx !== indexOfEdgeToRemove;
                        });
                      return (
                        onEdgesUpdate(updatedEdges),
                        onEdgeDeleted(edgeToRemove),
                        sendCommand('NOTIFY_EDGE_DELETED'),
                        updatedEdges
                      );
                    });
                  },
                });
            },
            [machineService, machineState, onEdgesUpdate, sendCommand],
          ),
          react_default.a.createElement(
            ReactKonva.Stage,
            {
              draggable: !0,
              width: props.width,
              height: props.height,
              scale: { x: scale, y: scale },
              position: position,
              onWheel: function onWheel(event) {
                event.evt.preventDefault();
                var newScale = 0 > event.evt.deltaY ? scale * updateScaleBy : scale / updateScaleBy,
                  mousePointerPositionX = event.evt.x,
                  mousePointerPositionY = event.evt.y,
                  newPos = {
                    x:
                      -(mousePointerPositionX / scale - position.x / scale - mousePointerPositionX / newScale) *
                      newScale,
                    y:
                      -(mousePointerPositionY / scale - position.y / scale - mousePointerPositionY / newScale) *
                      newScale,
                  };
                setScale(newScale), setPosition(newPos);
              },
              onDragEnd: function onDragEnd(event) {
                event.evt.preventDefault(),
                  isEventFromNode(event) || setPosition({ x: event.target.attrs.x, y: event.target.attrs.y });
              },
            },
            react_default.a.createElement(
              GraphCoordinatorContext.Provider,
              { value: coordinator },
              react_default.a.createElement(
                ReactKonva.Layer,
                null,
                edges.map(function(edge) {
                  var fromNode = nodes.find(function(node) {
                      return node.nodeGraphData.id === edge.edgeGraphData.from;
                    }),
                    toNode = nodes.find(function(node) {
                      return node.nodeGraphData.id === edge.edgeGraphData.to;
                    });
                  return react_default.a.createElement(Edge_Edge, {
                    key: edge.edgeGraphData.id,
                    from: [fromNode.nodeGraphData.x, fromNode.nodeGraphData.y],
                    to: [toNode.nodeGraphData.x, toNode.nodeGraphData.y],
                    nodeWidth: props.nodeWidth,
                    nodeHeight: props.nodeHeight,
                  });
                }),
                nodes.map(function(node) {
                  return react_default.a.createElement(Node_Node, {
                    key: node.nodeGraphData.id,
                    renderNode: props.renderNode,
                    data: node,
                    onDragMove: function onDragMove(movingNode) {
                      var updatedNodes = nodes.map(function(node) {
                        return node.nodeGraphData.id === movingNode.id
                          ? _objectSpread({}, node, {
                              nodeGraphData: _objectSpread({}, node.nodeGraphData, {
                                x: movingNode.x,
                                y: movingNode.y,
                              }),
                            })
                          : node;
                      });
                      setNodes(updatedNodes);
                    },
                    onDragEnd: props.onNodeDragEnd,
                  });
                }),
              ),
              NetworkGraph_ref,
            ),
          )
        );
      }
      (NetworkGraph.displayName = 'NetworkGraph'),
        (NetworkGraph.defaultProps = {
          onNodeDragEnd: function onNodeDragEnd() {},
          onEdgesUpdate: function onEdgesUpdate() {},
          onEdgeAdded: function onEdgeAdded() {},
          onEdgeDeleted: function onEdgeDeleted() {},
        });
      var NetworkGraph_NetworkGraph = NetworkGraph;
      (NetworkGraph.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'NetworkGraph',
        props: {
          onNodeDragEnd: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onEdgesUpdate: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onEdgeAdded: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onEdgeDeleted: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          width: { type: { name: 'number' }, required: !0, description: '' },
          height: { type: { name: 'number' }, required: !0, description: '' },
          renderNode: { type: { name: 'func' }, required: !0, description: '' },
          nodes: {
            type: { name: 'arrayOf', value: { name: 'custom', raw: 'NodeShape' } },
            required: !0,
            description: '',
          },
          edges: {
            type: { name: 'arrayOf', value: { name: 'custom', raw: 'EdgeShape' } },
            required: !0,
            description: '',
          },
          nodeWidth: { type: { name: 'number' }, required: !0, description: '' },
          nodeHeight: { type: { name: 'number' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\NetworkGraph\\NetworkGraph.jsx'] = {
            name: 'NetworkGraph',
            docgenInfo: NetworkGraph.__docgenInfo,
            path: 'src\\components\\NetworkGraph\\NetworkGraph.jsx',
          });
      var AddEdgeButton = function() {
        var coordinator = Object(react.useContext)(GraphCoordinatorContext),
          machineState = coordinator.machineState,
          sendCommand = coordinator.sendCommand;
        return react_default.a.createElement(
          'button',
          {
            onClick: function onClick() {
              machineState.matches('addEdge') ? sendCommand('ESCAPE') : sendCommand('ADD_EDGE');
            },
          },
          machineState.matches('addEdge') ? 'Escape "Add Edge Mode"' : 'Add Edge',
        );
      };
      AddEdgeButton.displayName = 'AddEdgeButton';
      var WorkflowControls_AddEdgeButton = AddEdgeButton;
      (AddEdgeButton.__docgenInfo = { description: '', methods: [], displayName: 'AddEdgeButton' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\WorkflowControls\\AddEdgeButton.jsx'] = {
            name: 'AddEdgeButton',
            docgenInfo: AddEdgeButton.__docgenInfo,
            path: 'src\\components\\WorkflowControls\\AddEdgeButton.jsx',
          });
      var DeleteEdgeButton = function() {
        var coordinator = Object(react.useContext)(GraphCoordinatorContext),
          machineState = coordinator.machineState,
          sendCommand = coordinator.sendCommand;
        return react_default.a.createElement(
          'button',
          {
            onClick: function onClick() {
              machineState.matches('deleteEdge') ? sendCommand('ESCAPE') : sendCommand('DELETE_EDGE');
            },
          },
          machineState.matches('deleteEdge') ? 'Escape "Delete Edge Mode"' : 'Delete Edge',
        );
      };
      DeleteEdgeButton.displayName = 'DeleteEdgeButton';
      var WorkflowControls_DeleteEdgeButton = DeleteEdgeButton;
      (DeleteEdgeButton.__docgenInfo = { description: '', methods: [], displayName: 'DeleteEdgeButton' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\WorkflowControls\\DeleteEdgeButton.jsx'] = {
            name: 'DeleteEdgeButton',
            docgenInfo: DeleteEdgeButton.__docgenInfo,
            path: 'src\\components\\WorkflowControls\\DeleteEdgeButton.jsx',
          });
      var WorkflowControls_ref = react_default.a.createElement(WorkflowControls_AddEdgeButton, null),
        WorkflowControls_ref2 = react_default.a.createElement(WorkflowControls_DeleteEdgeButton, null),
        WorkflowControls = function() {
          return react_default.a.createElement(
            'div',
            { style: { width: '100%', height: 30 } },
            WorkflowControls_ref,
            WorkflowControls_ref2,
          );
        };
      WorkflowControls.displayName = 'WorkflowControls';
      var WorkflowControls_WorkflowControls = WorkflowControls;
      (WorkflowControls.__docgenInfo = { description: '', methods: [], displayName: 'WorkflowControls' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\WorkflowControls\\WorkflowControls.jsx'] = {
            name: 'WorkflowControls',
            docgenInfo: WorkflowControls.__docgenInfo,
            path: 'src\\components\\WorkflowControls\\WorkflowControls.jsx',
          });
      var esm_typeof = __webpack_require__(316),
        CustomWorkflowControlsWrapper = function(props) {
          var coordinator = Object(react.useContext)(GraphCoordinatorContext),
            machineState = coordinator.machineState,
            sendCommand = coordinator.sendCommand;
          if (!machineState)
            throw new Error(
              'CustomWorkflowControlsWrapper depends on context provided by GraphCoordinator. Place this component below the GraphCoordinator tree',
            );
          var mode = (function(machineState) {
            var value = machineState.value;
            return 'object' === Object(esm_typeof.a)(value) ? Object.keys(value)[0] : value;
          })(machineState);
          return react_default.a.createElement(
            'div',
            null,
            props.children({
              mode: mode,
              setToAddEdgeMode: function setToAddEdgeMode() {
                return sendCommand('ADD_EDGE');
              },
              setToDeleteEdgeMode: function setToDeleteEdgeMode() {
                return sendCommand('DELETE_EDGE');
              },
              escapeCurrentMode: function escapeCurrentMode() {
                return sendCommand('ESCAPE');
              },
            }),
          );
        };
      CustomWorkflowControlsWrapper.displayName = 'CustomWorkflowControlsWrapper';
      var CustomWorkflowControlsWrapper_CustomWorkflowControlsWrapper = CustomWorkflowControlsWrapper;
      (CustomWorkflowControlsWrapper.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'CustomWorkflowControlsWrapper',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src\\components\\CustomWorkflowControlsWrapper\\CustomWorkflowControlsWrapper.jsx'
          ] = {
            name: 'CustomWorkflowControlsWrapper',
            docgenInfo: CustomWorkflowControlsWrapper.__docgenInfo,
            path: 'src\\components\\CustomWorkflowControlsWrapper\\CustomWorkflowControlsWrapper.jsx',
          }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return NetworkGraph_NetworkGraph;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return WorkflowControls_WorkflowControls;
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return GraphCoordinator_GraphCoordinator;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return CustomWorkflowControlsWrapper_CustomWorkflowControlsWrapper;
        });
    },
    629: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145),
            _ViewOnlyNetworkGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(311),
            _NetworkGraphWithControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(317),
            _NetworkGraphWithCustomControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(318),
            _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _ViewOnlyNetworkGraph__WEBPACK_IMPORTED_MODULE_2__.a,
              null,
            ),
            _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _NetworkGraphWithControls__WEBPACK_IMPORTED_MODULE_3__.a,
              null,
            ),
            _ref3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _NetworkGraphWithCustomControls__WEBPACK_IMPORTED_MODULE_4__.a,
              null,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Network Graph', module)
            .add('View Only', function() {
              return _ref;
            })
            .add('With Controls', function() {
              return _ref2;
            })
            .add('With Custom Controls', function() {
              return _ref3;
            });
        }.call(this, __webpack_require__(233)(module));
    },
    77: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(68);
      var modifiedNodes = [
        { id: 1, label: 'TESTITEM-9318', x: 136, y: 90 },
        { id: 2, label: 'TESTITEM-9056', x: 132, y: 118 },
        { id: 3, label: 'TESTITEM-9252', x: 158, y: 70 },
        { id: 4, label: 'TESTITEM-8718', x: 5, y: 176 },
        { id: 5, label: 'TESTITEM-9172', x: 116, y: 17 },
        { id: 6, label: 'TESTITEM-8478', x: 92, y: 153 },
        { id: 7, label: 'TESTITEM-8329', x: 113, y: 171 },
        { id: 8, label: 'TESTITEM-8325', x: 185, y: 181 },
        { id: 9, label: 'TESTITEM-8317', x: 184, y: 150 },
        { id: 10, label: 'TESTITEM-8316', x: 59, y: 137 },
        { id: 11, label: 'TESTITEM-8311', x: 167, y: 35 },
        { id: 12, label: 'TESTITEM-8291', x: 13, y: 110 },
        { id: 13, label: 'TESTITEM-8290', x: 35, y: 109 },
        { id: 14, label: 'TESTITEM-8289', x: -253, y: -153 },
        { id: 15, label: 'TESTITEM-8288', x: 140, y: 137 },
        { id: 16, label: 'TESTITEM-8286', x: 2, y: 112 },
        { id: 17, label: 'TESTITEM-8285', x: 70, y: 140 },
        { id: 18, label: 'TESTITEM-8277', x: 51, y: 54 },
        { id: 19, label: 'TESTITEM-8276', x: 49, y: 79 },
        { id: 20, label: 'TESTITEM-8275', x: -442, y: 166 },
        { id: 21, label: 'TESTITEM-8274', x: 193, y: 192 },
        { id: 22, label: 'TESTITEM-8122', x: 137, y: 7 },
        { id: 23, label: 'TESTITEM-8121', x: 151, y: 124 },
        { id: 24, label: 'TESTITEM-8120', x: 169, y: 182 },
        { id: 25, label: 'TESTITEM-8119', x: 102, y: 148 },
        { id: 26, label: 'TESTITEM-8118', x: 71, y: 172 },
        { id: 27, label: 'TESTITEM-8117', x: 81, y: 66 },
        { id: 28, label: 'TESTITEM-8116', x: 77, y: 154 },
        { id: 29, label: 'TESTITEM-8115', x: -344, y: 24 },
        { id: 30, label: 'TESTITEM-8114', x: 179, y: 199 },
        { id: 31, label: 'TESTITEM-8113', x: 159, y: 182 },
        { id: 32, label: 'TESTITEM-8112', x: 113, y: 171 },
        { id: 33, label: 'TESTITEM-8111', x: 85, y: 168 },
        { id: 34, label: 'TESTITEM-8110', x: 159, y: 172 },
        { id: 35, label: 'TESTITEM-8109', x: 138, y: 27 },
        { id: 36, label: 'TESTITEM-8108', x: -262, y: 267 },
        { id: 37, label: 'TESTITEM-8107', x: -551, y: 46 },
        { id: 38, label: 'TESTITEM-8106', x: 72, y: 89 },
        { id: 39, label: 'TESTITEM-8105', x: 170, y: 12 },
        { id: 40, label: 'TESTITEM-8103', x: 39, y: 118 },
        { id: 41, label: 'TESTITEM-8102', x: 186, y: 176 },
        { id: 42, label: 'TESTITEM-8101', x: 133, y: 106 },
        { id: 43, label: 'TESTITEM-8100', x: 52, y: 122 },
        { id: 44, label: 'TESTITEM-8099', x: 184, y: 71 },
        { id: 45, label: 'TESTITEM-8098', x: 121, y: 14 },
        { id: 46, label: 'TESTITEM-8097', x: 175, y: 55 },
        { id: 47, label: 'TESTITEM-8096', x: 82, y: 118 },
        { id: 48, label: 'TESTITEM-8095', x: -71, y: -104 },
        { id: 49, label: 'TESTITEM-8094', x: 171, y: 38 },
        { id: 50, label: 'TESTITEM-8030', x: 185, y: 54 },
        { id: 51, label: 'TESTITEM-8025', x: 197, y: 80 },
        { id: 52, label: 'TESTITEM-7974', x: 151, y: 136 },
        { id: 53, label: 'TESTITEM-7973', x: 110, y: 88 },
        { id: 54, label: 'TESTITEM-7359', x: -163, y: 367 },
      ].map(function(node) {
        return { label: node.label, nodeGraphData: { id: node.id, x: node.x + 800, y: node.y + 400 } };
      });
      __webpack_exports__.a = modifiedNodes;
    },
    78: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(68);
      var modifiedEdges = [
        { from: 37, to: 29, id: '06bf9a07-8246-47c2-8619-68dc0ff2781b' },
        { from: 14, to: 48, id: '98a3dc00-09f8-4e08-9522-e01490c229d2' },
        { from: 29, to: 14, id: 'e0a97c4b-74f5-4123-9636-cdfa4b98619a' },
        { from: 20, to: 36, id: '5b9b7db4-6732-4e91-bec3-9c181514d23c' },
        { from: 36, to: 54, id: 'e9e99b89-6a48-4291-9c18-780ebdef4dc4' },
      ].map(function(edge) {
        return { edgeGraphData: { id: edge.id, from: edge.from, to: edge.to } };
      });
      __webpack_exports__.a = modifiedEdges;
    },
    79: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
        react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22),
        _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_konva__WEBPACK_IMPORTED_MODULE_1__.Rect,
          { width: 300, height: 50, fill: '#fff', shadowColor: '#636f74', shadowBlur: 3, cornerRadius: 5 },
        ),
        SampleNodeRenderer = function(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_konva__WEBPACK_IMPORTED_MODULE_1__.Group,
            null,
            _ref,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_konva__WEBPACK_IMPORTED_MODULE_1__.Text, {
              text: props.label,
              x: 20,
              y: 15,
            }),
          );
        };
      (SampleNodeRenderer.displayName = 'SampleNodeRenderer'),
        (__webpack_exports__.a = SampleNodeRenderer),
        (SampleNodeRenderer.__docgenInfo = { description: '', methods: [], displayName: 'SampleNodeRenderer' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\components\\SampleNodeRenderer\\SampleNodeRenderer.jsx'] = {
            name: 'SampleNodeRenderer',
            docgenInfo: SampleNodeRenderer.__docgenInfo,
            path: 'src\\components\\SampleNodeRenderer\\SampleNodeRenderer.jsx',
          });
    },
  },
  [[319, 1, 2]],
]);
//# sourceMappingURL=main.c8741bb71026672470db.bundle.js.map
