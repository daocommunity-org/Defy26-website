"use client";
import React, { useState } from "react";
import "./Faqs.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqQuestions = [
  "Who can participate?",
  "What is the permitted team size? Can I participate individually?",
  "When will the applications and submissions close?",
  "Can I participate if I don't have deep technical knowledge in blockchain or Web3?",
  "Is it mandatory to focus on both the business and Web3 aspects?",
  "What is the prize pool?",
  "How much does it cost?",
  "Do you provide travel reimbursements for the finalists?",
];

const faqAnswers = [
  "DeFy 26 is open to college students, from all backgrounds, who are passionate about Web3 and/or are aspiring entrepreneurs.",
  "You can participate in teams of 4-6 if you fit the above criteria. Unfortunately, DeFy 26 does not permit solo participations.",
  "Applications and submissions both close on 31st Dec, 2025.",
  "Absolutely! This hackathon encourages collaboration, so we expect teams to be comprised of both tech-oriented and business-oriented participants. Make sure you have both kinds in your team.",
  "Yes. Participants should not only showcase technical proficiency in their prototypes but also demonstrate a clear understanding of the market and the business potential of their ideas.",
  "The prize pool sits at 1 Lakh+ Rupees, consisting cash rewards, tokens and goodies!",
  "Registrations are free of cost to all.",
  "While DeFy 26 is free-of-charge to participants thanks to our sponsors and partners, the event cannot cover travel or other expenses for attendees.",
];

const faqData: FaqItem[] = faqQuestions.map((question, index) => {
  return {
    question: question,
    answer: faqAnswers[index] || "Answer missing",
  };
});

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((v) => !v);
  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    }
  };

  return (
    <div
      className="faq-item"
      data-open={isOpen}
      role="button"
      tabIndex={0}
      onClick={toggleOpen}
      onKeyDown={onKey}
    >
      <div className="faq-question">
        <h2>{item.question}</h2>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      <div className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export const Faqs: React.FC = () => {
  return (
    <section className="faq-section">
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FaqItemComponent key={index} item={item} />
        ))}
      </div>
    </section>
  );
};
