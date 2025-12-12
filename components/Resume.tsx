import React from 'react';
import { FileText, Download, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gray-900/40 p-8 md:p-12 rounded-lg border border-gray-800 backdrop-blur-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
          <h2 className="text-3xl font-mono font-bold text-cyber-neon flex items-center gap-3">
            <FileText className="w-8 h-8" />
            <span>Resume</span>
          </h2>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-cyber-neon text-black font-semibold rounded hover:bg-cyan-400 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Bilal Uddin</h1>
          <p className="text-xl text-cyber-neon mb-4">Security Engineer</p>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-cyber-neon transition-colors">
              <Mail className="w-4 h-4" />
              <span>your.email@example.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-cyber-neon transition-colors">
              <Phone className="w-4 h-4" />
              <span>+123 456 7890</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyber-neon transition-colors">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/bilaluddin1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyber-neon transition-colors">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Your Location</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-cyber-neon">→</span> Professional Summary
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Security Engineer with expertise in <span className="text-white font-semibold">AppSec</span>, <span className="text-white font-semibold">Cloud Security</span>, and <span className="text-white font-semibold">DevSecOps</span>. 
            Skilled at automating workflows and embedding security into CI/CD pipelines to drive a secure development culture. Proven track record of reducing vulnerabilities by 40% and improving incident response speed through strategic security implementations.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-cyber-neon">→</span> Professional Experience
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-white">Security Engineer</h4>
                  <p className="text-cyber-green">Bazaar Technologies</p>
                </div>
                <span className="text-gray-400 text-sm">June 2024 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li className="flex items-start">
                  <span className="text-cyber-neon mr-2">›</span>
                  Reduced critical security vulnerabilities by 40% in Java/Kotlin microservices APIs through hands-on code reviews
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-neon mr-2">›</span>
                  Performed security assessments of mobile and web applications using Burp Suite and MOBSF
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-neon mr-2">›</span>
                  Deployed vulnerability management program integrating Prowler with DefectDojo, reducing reporting overhead by 50%
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-neon mr-2">›</span>
                  Managed AWS WAF to protect critical web applications from OWASP Top 10 vulnerabilities
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-cyber-neon">→</span> Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Security Tools</h4>
              <p className="text-gray-300 text-sm">Burp Suite, MOBSF, Semgrep, Trivy, TruffleHog, Dependabot, Wazuh SIEM, Prowler, DefectDojo</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Cloud & Infrastructure</h4>
              <p className="text-gray-300 text-sm">AWS, Kubernetes, Docker, Terraform, Falco, Kyverno, OPA</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Programming</h4>
              <p className="text-gray-300 text-sm">Python, Java, Kotlin, Bash, JavaScript/TypeScript</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Specializations</h4>
              <p className="text-gray-300 text-sm">AppSec, Cloud Security, DevSecOps, Penetration Testing, Threat Modeling</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-cyber-neon">→</span> Education
          </h3>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-bold text-white">B.S. Computer Science</h4>
              <p className="text-cyber-green">Mohammad Ali Jinnah University</p>
              <p className="text-gray-400 text-sm mt-1">Dean's Honors (Faculty of Computing - 2023)</p>
            </div>
            <span className="text-gray-400 text-sm">2020 - 2024</span>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-cyber-neon">→</span> Key Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-black/40 rounded border border-gray-700">
              <h4 className="text-white font-semibold mb-1">Secure SDLC Pipeline</h4>
              <p className="text-gray-400 text-sm">Boosted code scanning accuracy by 70% with automated security tools</p>
            </div>
            <div className="p-4 bg-black/40 rounded border border-gray-700">
              <h4 className="text-white font-semibold mb-1">K8s Hardening & Runtime Security</h4>
              <p className="text-gray-400 text-sm">Implemented security contexts and real-time anomaly detection</p>
            </div>
            <div className="p-4 bg-black/40 rounded border border-gray-700">
              <h4 className="text-white font-semibold mb-1">Wazuh SIEM Deployment</h4>
              <p className="text-gray-400 text-sm">Increased incident response speed by 40%</p>
            </div>
            <div className="p-4 bg-black/40 rounded border border-gray-700">
              <h4 className="text-white font-semibold mb-1">IAM Security Redesign</h4>
              <p className="text-gray-400 text-sm">Reduced excessive permissions by 40% enforcing least privilege</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          .bg-cyber-black { background: white !important; }
          * { color: black !important; }
          button { display: none !important; }
          nav { display: none !important; }
          footer { display: none !important; }
        }
      `}</style>
    </div>
  );
};

