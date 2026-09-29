import { ImageResponse } from "next/og";
import { profileData } from "@/data/profile";

export const runtime = "edge";

export const alt = `${profileData.name} — Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B1120",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1E293B 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1E293B 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#60A5FA",
            fontSize: "24px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#3B82F6",
            }}
          />
          {profileData.positioning.tagline}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#F8FAFC",
              lineHeight: 1.1,
            }}
          >
            {profileData.name}
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#94A3B8",
            }}
          >
            {profileData.positioning.title}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#64748B",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            {profileData.positioning.intro}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "20px",
            color: "#475569",
            borderTop: "1px solid #1E293B",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <span>Data Analytics</span>
          <span>&bull;</span>
          <span>Operations</span>
          <span>&bull;</span>
          <span>Technology Solutions</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
