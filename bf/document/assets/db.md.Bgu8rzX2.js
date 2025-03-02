import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.CLBIubxr.js";const A=JSON.parse('{"title":"Database Creation Statement","description":"","frontmatter":{},"headers":[],"relativePath":"db.md","filePath":"db.md"}'),l={name:"db.md"};function T(t,s,N,L,i,c){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="database-creation-statement" tabindex="-1">Database Creation Statement <a class="header-anchor" href="#database-creation-statement" aria-label="Permalink to &quot;Database Creation Statement&quot;">​</a></h1><p>The following are the SQL statements for creating the database and table structures. You can modify them as needed.</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>USE mysql;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE USER &#39;eth&#39;@&#39;127.0.0.1&#39; IDENTIFIED BY &#39;12345678&#39;;</span></span>
<span class="line"><span>CREATE USER &#39;eth&#39;@&#39;%&#39; IDENTIFIED BY &#39;12345678&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GRANT ALL ON *.* TO &#39;eth&#39;@&#39;%&#39;;</span></span>
<span class="line"><span>GRANT ALL ON *.* TO &#39;eth&#39;@&#39;127.0.0.1&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE SCHEMA eth;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>USE eth;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE project (</span></span>
<span class="line"><span>    id BIGINT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    project_id VARCHAR(255) NOT NULL DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>    created_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    updated_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    strategy_count INT NOT NULL DEFAULT 0</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE t_attest_reward (</span></span>
<span class="line"><span>    id BIGINT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    project_id VARCHAR(255) NOT NULL DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>    created_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    updated_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    epoch BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    validator_index INT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    head_amount BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    target_amount BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    source_amount BIGINT NOT NULL DEFAULT 0</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE t_block_reward (</span></span>
<span class="line"><span>    id BIGINT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    project_id VARCHAR(255) NOT NULL DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>    created_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    updated_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    slot BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    proposer_index INT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    total_amount BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    attestation_amount BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    sync_aggregate_amount BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    proposer_slashing_amount BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    attester_slashing_amount BIGINT NOT NULL DEFAULT 0</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE t_chain_reorg (</span></span>
<span class="line"><span>    id BIGINT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    project_id VARCHAR(255) NOT NULL DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>    created_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    updated_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    epoch BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    slot BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    depth INT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    old_block_slot BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    new_block_slot BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    old_block_proposer_index BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    new_block_proposer_index BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    old_head_state VARCHAR(255) NOT NULL DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>    new_head_state VARCHAR(255) NOT NULL DEFAULT &#39;&#39;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE t_strategy (</span></span>
<span class="line"><span>    id BIGINT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    project_id VARCHAR(255) NOT NULL DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>    created_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    updated_at DATETIME NOT NULL,</span></span>
<span class="line"><span>    uuid VARCHAR(255) NOT NULL DEFAULT &#39;&#39;,</span></span>
<span class="line"><span>    content VARCHAR(10000) NULL,</span></span>
<span class="line"><span>    min_epoch BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    max_epoch BIGINT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    is_end TINYINT(1) NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    reorg_count INT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    impact_validator_count INT NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    honest_lose_rate_avg DOUBLE NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    attacker_lose_rate_avg DOUBLE NOT NULL DEFAULT 0</span></span>
<span class="line"><span>);</span></span></code></pre></div>`,3)]))}const o=n(l,[["render",T]]);export{A as __pageData,o as default};
