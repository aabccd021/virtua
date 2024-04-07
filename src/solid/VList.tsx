/**
 * @jsxImportSource solid-js
 */
import { type JSX } from "solid-js";
import { type ViewportComponentAttributes } from "./types";
import {
  Virtualizer,
  type VirtualizerHandle,
  type VirtualizerProps,
} from "./Virtualizer";

/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {}

/**
 * Props of {@link VList}.
 */
export interface VListProps<T>
  extends Pick<
      VirtualizerProps<T>,
      | "ref"
      | "data"
      | "children"
      | "overscan"
      | "itemSize"
      | "shift"
      | "horizontal"
      | "onScroll"
      | "onScrollEnd"
      | "onRangeChange"
    >,
    ViewportComponentAttributes {}

/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export const VList = <T,>(props: VListProps<T>): JSX.Element => {
  const {
    ref: _ref,
    data: _data,
    children: _children,
    overscan: _overscan,
    itemSize,
    shift: _shift,
    horizontal = false,
    onScroll: _onScroll,
    onScrollEnd: _onScrollEnd,
    onRangeChange: _onRangeChange,
    style: _style,
    ...attrs
  } = props;

  return (
    <div
      {...attrs}
      style={{
        display: horizontal ? "inline-block" : "block",
        [horizontal ? "overflow-x" : "overflow-y"]: "auto",
        contain: "strict",
        width: "100%",
        height: "100%",
        ...props.style,
      }}
    >
      <Virtualizer
        ref={props.ref}
        data={props.data}
        overscan={props.overscan}
        itemSize={props.itemSize}
        shift={props.shift}
        horizontal={horizontal}
        onScroll={props.onScroll}
        onScrollEnd={props.onScrollEnd}
        onRangeChange={props.onRangeChange}
      >
        {props.children}
      </Virtualizer>
    </div>
  );
};
