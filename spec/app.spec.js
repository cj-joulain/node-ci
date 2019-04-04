describe("/", function() {
  it("always passes because true is true", function() {
    expect(true).toBe(true);
  });
});

describe("/", function() {
  it("this test should fail", function() {
    expect(false).toBe(true);
  });
});
