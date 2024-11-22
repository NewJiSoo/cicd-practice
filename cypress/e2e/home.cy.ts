describe("홈 페이지 앵커 링크", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // baseUrl이 설정되어 있으면 루트 경로로 접속
  });

  it("앵커 링크의 href 속성을 확인합니다.", () => {
    cy.get("a")
      .contains("Learn") // 'Learn' 텍스트가 있는 <a> 태그 선택
      .should("have.attr", "href", "https://nextjs.org/");
  });

  it("'Get started by editing' 텍스트가 있는지 확인합니다.", () => {
    cy.contains("li", "Get started by editing").should("be.visible");
  });

  it("모든 주요 텍스트가 있는지 확인합니다.", () => {
    cy.contains("Get started by editing").should("be.visible");
    cy.contains("Save and see your changes instantly.").should("be.visible");
    cy.contains("테스트 중!!!").should("be.visible");
  });
});
