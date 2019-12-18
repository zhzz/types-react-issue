Steps to reproduce the issue:
1. `git clone https://github.com/zhzz/types-react-issue.git && cd types-react-issue`
2. `yarn`
3. `yarn tsc --noEmit`

Output:
```
index.tsx:14:61 - error TS7006: Parameter 'v' implicitly has an 'any' type.
14 export const Example = () => <Component value={1} onChange={v => v} />;
                                                               ~
Found 1 error.
```