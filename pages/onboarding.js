import React from "react";
import Link from "next/link";
import styles from "../styles/Onboarding.module.css";

export default function OnboardingView() {
  return (
    <div className={styles.Onboarding_container}>
      <h1>Studio Ghibli Tracker</h1>
      <Link href="/login">
        <button>Login</button>
      </Link>
      <Link href="#">
        <button>Sign in</button>
      </Link>
    </div>
  );
}
