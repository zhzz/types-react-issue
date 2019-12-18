import * as React from 'react';

interface Props<T> {
  value: T;
  onChange: (v: T) => T;
}

export class Component<T> extends React.Component<Props<T>> {
  public static defaultProps = {};
  public static propTypes = {};
}

// Parameter 'v' implicitly has an 'any' type.
export const Example = () => <Component value={1} onChange={v => v} />;