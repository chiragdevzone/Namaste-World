import { render, screen } from "@testing-library/react";
import RestroCard from "../RestroCard";
import MOCK_DATA from "../Mock/mockData.json";
import "@testing-library/jest-dom";
import { withClosedLabel } from "../RestroCard";

it("should render RestroCard component with props data", () => {
  render(<RestroCard restroData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

it("should render RestroCard with closed label", () => {
  const ResturantcardClosed = withClosedLabel(RestroCard);

  render(<ResturantcardClosed restroData={MOCK_DATA} />);

  const closedLabel = screen.getByText("Closed");

  expect(closedLabel).toBeInTheDocument();
});
