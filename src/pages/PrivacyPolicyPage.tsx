import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import '../styles/PrivacyPolicyPage.css';

const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="privacy-page">
      <div className="privacy-page-header">
        <button className="privacy-page-back" onClick={() => navigate(-1)}>
          ← Назад
        </button>
      </div>
      
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;