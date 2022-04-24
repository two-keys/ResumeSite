import hello from "./hello";

test('Hello World test', () => {
    const data = hello();

    expect(data).toBe("Hello World!");
})