import { AuthService } from "./AuthService";

describe("Assignment-3 Auth service works properly", () => {
  let authService: AuthService;
  beforeEach(() => {
    authService = new AuthService();
  });
  it("Authenticate user with correct crendentials", () => {
    const isAuthenticated = authService.authenticate(
      "aryanthapak@gmail.com",
      "Aryan@@@"
    );
    expect(isAuthenticated).toBe(true);
  });

  it("Doesn't Authenticate user with wrong details", () => {
    const isAuthenticated = authService.authenticate(
      "aryanthapak@gmail.com",
      "Aryan@@"
    );
    expect(isAuthenticated).toBe(false);
  });

  it("Signs token properly", async () => {
    process.env.JWT_SECRET="Secret";
    const token = await authService.generateToken("aryanthapak@gmail.com");
    expect(token.length).toBeGreaterThan(0);
  });
});
