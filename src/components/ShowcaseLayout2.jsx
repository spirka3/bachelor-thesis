// import React, {useState} from "react";
// import PropTypes from "prop-types";
// import _ from "lodash";
// import { Responsive, WidthProvider } from "react-grid-layout";
// const ResponsiveReactGridLayout = WidthProvider(Responsive);
//
// const ShowcaseLayout2 = ({onLayoutChange}) => {
//
//   const generateLayout = () => {
//     return _.map(_.range(0, 25), function (item, i) {
//       const y = Math.ceil(Math.random() * 4) + 1;
//       return {
//         x: (_.random(0, 5) * 2) % 12,
//         y: Math.floor(i / 6) * y,
//         w: 2,
//         h: y,
//         i: i.toString(),
//         static: Math.random() < 0.05
//       };
//     });
//   }
//
//   const [bp, setBp] = useState("lg")
//   const [compactType, setCompactType] = useState("vertical")
//   const [mounted, setMounted] = useState(true)
//   const [layouts, setLayouts] = useState({
//     rowHeight: 30,
//     onLayoutChange: () => {},
//     cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
//     initialLayout: () => generateLayout()
//   })
//
//   const generateDOM = () => {
//     return _.map(layouts.lg, function (l, i) {
//       return (
//         <div key={i} className={l.static ? "static" : ""}>
//           {l.static ? (
//             <span className="text">Static - {i}</span>
//           ) : (
//             <span className="text">{i}</span>
//           )}
//         </div>
//       );
//     });
//   }
//
//   const onBreakpointChange = (breakpoint) => {
//     setBp(breakpoint)
//   }
//
//   return (
//     <div>
//       <div>
//         Current Breakpoint: {this.state.currentBreakpoint} ({
//         this.props.cols[this.state.currentBreakpoint]
//       }{" "}
//         columns)
//       </div>
//       <div>
//         Compaction type:{" "}
//         {_.capitalize(this.state.compactType) || "No Compaction"}
//       </div>
//       <button onClick={onNewLayout}>Generate New Layout</button>
//       <button onClick={onCompactTypeChange}>
//         Change Compaction Type
//       </button>
//       <ResponsiveReactGridLayout
//         layouts={layouts}
//         onBreakpointChange={onBreakpointChange}
//         onLayoutChange={onLayoutChange}
//         // WidthProvider option
//         measureBeforeMount={false}
//         // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
//         // and set `measureBeforeMount={true}`.
//         useCSSTransforms={mounted}
//         compactType={compactType}
//         preventCollision={!compactType}
//       >
//         {generateDOM}
//       </ResponsiveReactGridLayout>
//     </div>
//   );
// }
//
// export default ShowcaseLayout2
