import React from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography } from "@mui/material";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <Typography variant="h4" gutterBottom {...props} />
          ),
          h2: ({ node, ...props }) => (
            <Typography variant="h5" gutterBottom {...props} />
          ),
          p: ({ node, ...props }) => (
            <Typography variant="body1" paragraph {...props} />
          ),
          ul: ({ node, ...props }) => (
            <Box component="ul" sx={{ paddingLeft: "20px", marginBottom: "16px" }} {...props} />
          ),
          li: ({ node, ...props }) => (
            <Typography component="li" variant="body1" {...props} />
          ),
          img: ({ node, ...props }) => (
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                borderRadius: "8px",
                margin: "16px 0",
              }}
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;
