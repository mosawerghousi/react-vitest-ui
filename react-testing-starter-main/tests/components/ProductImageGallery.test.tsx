import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProcutImageG", () => {
  it("should render null when array is 0", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeInTheDocument();
  });

  it("should render a list of img", () => {
    const imageUrls = ["url1", "url2"];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
