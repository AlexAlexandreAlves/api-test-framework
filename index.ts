declare namespace sqg {

    interface DoneCallback {
        (...args: any[]): any;
        fail(error?: string | { message: string }): any;
    }
    type ProvidesCallback = ((cb: DoneCallback) => void | undefined) | (() => PromiseLike<unknown>);


    interface Each {

        // Exclusively arrays.
        <T extends any[] | [any]>(cases: readonly T[]): (
            name: string,
            fn: (...args: T) => any,
            timeout?: number,
        ) => void;
        <T extends readonly any[]>(cases: readonly T[]): (
            name: string,
            fn: (...args: ExtractEachCallbackArgs<T>) => any,
            timeout?: number,
        ) => void;
        // Not arrays.
        <T>(cases: readonly T[]): (name: string, fn: (arg: T, done: DoneCallback) => any, timeout?: number) => void;
        (cases: ReadonlyArray<readonly any[]>): (
            name: string,
            fn: (...args: any[]) => any,
            timeout?: number,
        ) => void;
        (strings: TemplateStringsArray, ...placeholders: any[]): (
            name: string,
            fn: (arg: any, done: DoneCallback) => any,
            timeout?: number,
        ) => void;
    }

    interface test {
        (name: string, fn?: ProvidesCallback, timeout?: number): void;
        /**
         * Only runs this test in the current file.
         */
        only: test;
        /**
         * Mark this test as expecting to fail.
         *
         * Only available in the default `jest-circus` runner.
         */
        failing: test;
        /**
         * Skips running this test in the current file.
         */
        skip: test;
        /**
         * Sketch out which tests to wrteste in the future.
         */
        todo: (name: string) => void;
        /**
         * Experimental and should be avoided.
         */
        concurrent: test;
        /**
         * Use if you keep duplicating the same test with different data. `.each` allows you to write the
         * test once and pass data in.
         *
         * `.each` is available with two APIs:
         *
         * #### 1  `test.each(table)(name, fn)`
         *
         * - `table`: Array of Arrays with the arguments that are passed into the test fn for each row.
         * - `name`: String the title of the test block.
         * - `fn`: Function the test to be run, this is the function that will receive the parameters in each row as function arguments.
         *
         * #### 2  `test.each table(name, fn)`
         *
         * - `table`: Tagged Template Literal
         * - `name`: String the title of the test, use `$variable` to inject test data into the test title from the tagged template expressions.
         * - `fn`: Function the test to be run, this is the function that will receive the test data object.
         *
         * @example
         *
         * // API 1
         * test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
         *   '.add(%i, %i)',
         *   (a, b, expected) => {
         *     expect(a + b).toBe(expected);
         *   },
         * );
         *
         * // API 2
         * test.each`
         * a    | b    | expected
         * ${1} | ${1} | ${2}
         * ${1} | ${2} | ${3}
         * ${2} | ${1} | ${3}
         * `('returns $expected when $a is added $b', ({a, b, expected}) => {
         *    expect(a + b).toBe(expected);
         * });
         */
        each: Each;
    }


    interface Description {
        (description: number | string | Function): void;
        only: Description;
        skip: Description;

    }
}

