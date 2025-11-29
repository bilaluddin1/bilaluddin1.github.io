import React from 'react';
import { User, Shield, Cloud, Code } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-cyber-neon opacity-50"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-cyber-neon opacity-50"></div>

      <div className="bg-gray-900/40 p-8 md:p-12 rounded-lg border border-gray-800 backdrop-blur-md">
        <h2 className="text-3xl font-mono font-bold text-white mb-8 flex items-center gap-3">
          <User className="w-8 h-8 text-cyber-neon" />
          <span>About Me</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 text-gray-300 text-center max-w-4xl mx-auto">
                <p>
                    I am a <span className="text-white font-semibold">Security Engineer</span> dedicated to building resilient, <span className="text-white">secure-by-design systems</span> while fostering a strong <span className="text-white font-semibold">secure development culture</span>. My long-term goal is to evolve into a strategic <span className="text-white">security leader</span> who influences security at both technical and <span className="text-white">organizational levels</span>.
                </p>
                <p>
                    My work centers on <span className="text-white font-semibold">AppSec</span>, <span className="text-white font-semibold">Cloud Security</span>, and <span className="text-white font-semibold">DevSecOps</span>, focusing on <span className="text-white font-semibold">embedding security</span> into <span className="text-white font-semibold">CI/CD pipelines</span>, ensuring that critical infrastructure is hardened, scalable, and protected without compromising <span className="text-white">development velocity</span> or <span className="text-white">innovation</span>.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-cyber-green shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">AppSec</h4>
                        <p className="text-sm text-gray-400">Trivy, TruffleHog, Dependabot, Dependency Track</p>
                    </div>
                </div>
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Penetration Tools</h4>
                        <p className="text-sm text-gray-400">OWASP, Burp Suite, MOBSF, Frida, Android Studio</p>
                    </div>
                </div>
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Cloud className="w-6 h-6 text-cyber-neon shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Cloud Security</h4>
                        <p className="text-sm text-gray-400">AWS, Terraform, Kubernetes, Docker, Falco, IAM, Kyverno</p>
                    </div>
                </div>
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Code className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Automation Tools</h4>
                        <p className="text-sm text-gray-400">Python, Bash, Java, n8n, Semgrep, Qualys</p>
                    </div>
                </div>
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Security Information and Event Management</h4>
                        <p className="text-sm text-gray-400">Wazuh SIEM</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};