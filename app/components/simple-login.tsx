import React, { CSSProperties, useState } from "react";

interface LoginPopupProps {
  isOpen: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

interface FormData {
  email: string;
  password: string;
}

// Định nghĩa styles với type CSSProperties
const styles: Record<string, CSSProperties> = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "32px",
    width: "400px",
    position: "relative",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    position: "absolute",
    right: "16px",
    top: "16px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#666",
    padding: "4px",
    fontSize: "24px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "24px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s",
    marginTop: "16px",
  },
  forgotPassword: {
    display: "block",
    textAlign: "center",
    marginTop: "16px",
    color: "#2563eb",
    textDecoration: "none",
    fontSize: "14px",
  },
};

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, setIsLoggedIn }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "test@test.com",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if (formData.password == "1235") {
      setIsLoggedIn(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Đăng nhập</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>

          <button
            type="submit"
            style={styles.submitButton}
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = "#1d4ed8";
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
            }}
          >
            Đăng nhập
          </button>

          <a
            href="#"
            style={styles.forgotPassword}
            onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Quên mật khẩu?
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
