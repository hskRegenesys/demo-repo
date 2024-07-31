import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FeedBackForm from "./FeedBackForm";
import NewsLetter from "./NewsLetter";
import { IPostTypes } from "./dataTypes";
import RightSidePanel from "./RightSidePanel";
import ApplyNow from "./ApplyNow";
import BreadCrumb from "./BreadCrumb";
import Schemas from "src/schemas";
import { Constants } from "src/schemas/data";

const BlogContainer = ({
  slug,
  setBlogList,
  postResponse,
  isBlogDetail,
  faqsSchemaData,
}: {
  slug: string;
  setBlogList: (value: any) => void;
  postResponse: Array<IPostTypes>;
  isBlogDetail?: boolean;
  faqsSchemaData?: any;
}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [anchorData, setAnchorData] = useState<any>(null);
  const [anchorClicked, setAnchorClicked] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const headerOffset = 120;

  const imageUrl = postResponse[0]?.yoast_head_json?.og_image[0]?.url;

  useEffect(() => {
    const fetchBoldContent = () => {
      postResponse.forEach((item, index) => {
        if (item.content) {
          const htmlString = item.content.rendered;
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, "text/html");

          const tocElement = doc.querySelector(".ez-toc-title-toggle");
          if (tocElement) {
            const anchor = tocElement.querySelector("a");
            if (anchor) {
              anchor.removeAttribute("href");
            }

            if (anchor) {
              const span = doc.createElement("span");
              span.innerHTML = anchor.innerHTML;
              tocElement.replaceChild(span, anchor);
            }
          }

          const faqItemsTitle = doc.querySelectorAll(
            ".eb-accordion-title-wrapper"
          );

          faqItemsTitle.forEach((item, index) => {
            const uniqueId = `faq-${index + 1}`;
            item.setAttribute("data-target", uniqueId);
          });

          const faqItemsContent = doc.querySelectorAll(
            ".eb-accordion-content-wrapper"
          );

          faqItemsContent.forEach((item, index) => {
            const uniqueId = `faq-${index + 1}`;
            item.setAttribute("id", uniqueId);
            item.classList.add("hide-faq-list");
          });

          const ulElements = doc.querySelectorAll("ul");
          const h2Elements = doc.querySelectorAll("h2");

          ulElements.forEach((ulElement, indexUl) => {
            const liElements = ulElement.querySelectorAll("li");

            liElements.forEach((liElement) => {
              const anchorElements = liElement.querySelectorAll("a");

              anchorElements.forEach((anchorElement) => {
                let href = anchorElement.getAttribute("href");

                if (href && href.includes("#")) {
                  href = href.split("#")[1];
                  anchorElement.setAttribute("href", `#${href}`);
                }
              });
              h2Elements.forEach((h2Element) => {
                const firstSpan = h2Element.querySelector("span");
                if (firstSpan) {
                  const spanId = firstSpan.getAttribute("id");
                  if (spanId) {
                    h2Element.setAttribute("id", spanId);
                    firstSpan.removeAttribute("id");
                  }
                }
              });
            });
          });
          setAnchorData(Array.from(h2Elements));
          item.content.rendered = doc.documentElement.innerHTML;
        }
      });
    };

    if (postResponse?.length > 0) {
      fetchBoldContent();
    }
  }, [postResponse]);

  const offsetScroll = (targetId: any) => {
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleClick = (event: any) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      setAnchorClicked(true);
      offsetScroll(targetId);
    };

    if (contentRef.current) {
      const anchorElements =
        contentRef.current.querySelectorAll<HTMLAnchorElement>("ul li a");

      anchorElements.forEach((anchorElement) => {
        anchorElement.addEventListener("click", handleClick);
      });

      return () => {
        anchorElements.forEach((anchorElement) => {
          anchorElement.removeEventListener("click", handleClick);
        });
      };
    }
  }, [postResponse, anchorData]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 920);
    };
    handleResize();

    const handleToogleTOC = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;

      const isTocToggleButton =
        clickedElement.closest(".ez-toc-title-toggle") !== null;

      if (isTocToggleButton) {
        const tocList = document.querySelector(".ez-toc-list");
        if (tocList) {
          tocList.classList.toggle("hide-toc-list");
        }
      }
    };

    const handleTitleToggleClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement;
      const titleToggle = clickedElement.closest(
        ".eb-accordion-title-wrapper"
      ) as HTMLElement;

      if (titleToggle) {
        const targetId = titleToggle.getAttribute("data-target");

        if (targetId) {
          const contentWrapper = document.getElementById(targetId);
          if (contentWrapper) {
            contentWrapper.classList.toggle("hide-faq-list");
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleToogleTOC);
    document.addEventListener("click", handleTitleToggleClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleToogleTOC);
      document.removeEventListener("click", handleTitleToggleClick);
    };
  }, []);

  return (
    <>
      <Schemas type={Constants?.article} data={postResponse} />
      {faqsSchemaData && (
        <Schemas type={Constants?.faq} data={faqsSchemaData} />
      )}
      <div style={{ paddingTop: "80px" }}>
        <div>
          {imageUrl && typeof imageUrl === "string" && (
            <Image
              src={imageUrl}
              width={isMobileView ? 360 : 1920}
              height={isMobileView ? 200 : 800}
              alt="Blog Image"
              layout="responsive"
              objectPosition="center"
              className="BlogImg"
            />
          )}
          <div className="BlogForm">
            <ApplyNow yellowBtn isBlack />
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid px-5 blog-detail-container">
          {postResponse?.length && (
            <div className="link-title mb-3 p-2 bg-light ">
              <div className="p-1  text-dark rounded-left">
                Author : {postResponse[0]?.yoast_head_json?.author}
              </div>
              <div className="p-1 text-dark">
                Published Date :{" "}
                {new Date(
                  postResponse[0]?.yoast_head_json?.article_published_time
                )?.toLocaleDateString()}
              </div>
              {/* <div className="p-2 bg-light text-dark rounded-right">
                Publisher : {postResponse[0]?.yoast_head_json?.og_site_name}
              </div> */}
            </div>
          )}
          <BreadCrumb
            title={slug?.toString()?.replaceAll("-", " ")}
            parent="Blog"
            parentHref="/blog"
          />

          <div className="row py-3 blog-content-container">
            <div className="col-12 col-lg-9">
              {postResponse?.length > 0 ? (
                postResponse?.map((item, index) => (
                  <div key={item.id}>
                    {item?.title && (
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: item?.title?.rendered,
                        }}
                        className="blog-h1"
                      />
                    )}
                    {item?.content && (
                      <div
                        ref={contentRef}
                        id={`section-${index}`}
                        className="link-title"
                        dangerouslySetInnerHTML={{
                          __html: item?.content?.rendered,
                        }}
                      />
                    )}
                    <FeedBackForm />
                  </div>
                ))
              ) : (
                <p>Loading</p>
              )}
            </div>
            <div className="col-12 col-lg-3">
              <RightSidePanel
                isRecommendedPost
                yellowBtn
                isBlogDetail={isBlogDetail}
              />
            </div>
          </div>
        </div>

        <NewsLetter />
      </div>
    </>
  );
};

export default BlogContainer;
