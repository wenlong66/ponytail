<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../assets/logo-dark.png">
    <img src="../assets/logo.png" width="220" alt="Ponytail, 게으른 시니어 개발자">
  </picture>
</p>

<h1 align="center">Ponytail</h1>

<p align="center">
  <em>아무 말도 안 한다. 한 줄 쓴다. 돌아간다.</em>
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/50668?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-50668" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/50668" alt="DietrichGebert%2Fponytail | Trendshift" width="250" height="55"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/DietrichGebert/ponytail?style=flat-square&color=111111&label=stars" alt="Stars">
  <img src="https://img.shields.io/github/v/release/DietrichGebert/ponytail?style=flat-square&color=111111&label=release" alt="Release">
  <img src="https://img.shields.io/npm/v/@dietrichgebert/ponytail?style=flat-square&color=111111&label=npm" alt="npm">
  <img src="https://img.shields.io/badge/works%20with-20%20agents-111111?style=flat-square" alt="Works with 20 agents">
  <img src="https://img.shields.io/badge/license-MIT-111111?style=flat-square" alt="MIT license">
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/50668" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/50668/daily" alt="DietrichGebert/ponytail | Trendshift" width="250" height="55"/></a>
  <a href="https://trendshift.io/repositories/50668" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/50668/weekly" alt="DietrichGebert/ponytail | Trendshift" width="250" height="55"/></a>
  <a href="https://trendshift.io/repositories/50668?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-50668" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/50668/monthly?language=JavaScript" alt="DietrichGebert%2Fponytail | Trendshift monthly ranking" width="250" height="55"/></a>
</p>

<p align="center">
  <img src="../assets/v5/hero-ko.jpg" width="880" alt="Ponytail 5, 밑바닥부터 다시 만들었다: 코드 -53%, 시간 -41%, 비용 -26%, 토큰 -45%. 그런데도 위험한 로직의 98%가 테스트를 달고 나간다. Ponytail 없이는 68%.">
</p>

<p align="center">
  <strong>Ponytail 5: 밑바닥부터 다시 만들었다.</strong><br>
  <strong>코드 -53% &middot; 시간 -41% &middot; 비용 -26% &middot; 토큰 -45%</strong><br>
  <strong>그런데도: 위험한 로직의 98%가 테스트를 달고 나간다.</strong> Ponytail 없이는: 68%.<br>
  <sub>Claude Code에서 같은 에이전트를 스킬이 있을 때와 없을 때로 벤치마크했다: 실제 FastAPI + React 저장소를 포함한 작업 39개, Opus 5.5, 각 5회 실행. <a href="#numbers">자세히</a>.</sub>
</p>

<p align="center">
  <sub><a href="../README.md">English</a> &middot; <a href="README.es.md">Español</a> &middot; 한국어 &middot; <a href="README.zh-CN.md">简体中文</a> &middot; <a href="README.ja.md">日本語</a></sub><br>
  <sub>영어 README의 번역본이다. 내용이 다르면 <a href="../README.md">영어판</a>이 기준이다.</sub>
</p>

---

<p align="center">
  <a href="https://ponytail.dev/soon"><img src="../assets/waitlist-banner-ko.png" alt="곧 무언가가 온다, 대기 명단에 등록하기" width="760"></a>
</p>

## Ponytail로 이미 만든 것

<a href="https://theretriever.app">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../assets/retriever-logo-dark.svg">
    <img src="../assets/retriever-logo-light.svg" height="128" alt="Retriever">
  </picture>
</a>
<a href="https://photoreunion.app/?ref=ponytail-gh">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../assets/photoreunion-logo-dark.svg">
    <img src="../assets/photoreunion-logo-light.svg" height="128" alt="PhotoReunion">
  </picture>
</a>

---

누군지 알 것이다. 긴 포니테일. 타원형 안경. 버전 관리 시스템보다 회사에 오래 있었다. 쉰 줄을 보여 주면 가만히 보다가, 아무 말 없이 한 줄로 바꿔 놓는다.

Ponytail은 그 사람을 당신의 AI 에이전트 안에 넣는다.

이 슬림 버전은 토큰을 줄이는 Ponytail 핵심 스킬, 활성화 훅, 모드 추적, 코드 맵, 간단한 모드 배지만 유지한다. 밴드, 보드, 실행 중 통계, 메트릭 원장, CSV/webhook 보고, 세션 가져오기는 없다. 아래 수치는 과거 오프라인 벤치마크 결과다.

<a id="numbers"></a>
## 수치

<p align="center">
  <img src="../assets/v5/chart-ko.png" width="880" alt="스킬 없는 기준선 대비 비율. 코드 줄 수: Ponytail v4.13 52%, Ponytail 5 47%. 출력 토큰: 57%와 55%. 비용: 84%와 74%. 시간: 62%와 59%.">
</p>

<p align="center">
  <img src="../assets/v5/tests-ko.png" width="880" alt="코드는 절반인데, 그래도 더 낫다: 위험한 로직의 98%가 테스트를 달고 나간다 (스킬 없음 68%). 에이전트가 직접 쓴 테스트가 주입된 버그의 66%를 잡는다 (스킬 없음 46%).">
</p>

차트가 보여 주지 않는 것이 두 가지 있다. 블라인드 비교에서 Ponytail 5의 답변은 이전 Ponytail의 답변을 110 대 67로 이겼다. 그리고 보안 작업 6개(SQL 인젝션, 경로 탐색, 위조 토큰, 요청 속도 제한, 잘못된 CSV 행, 캐싱)에서 30회 실행을 모두 통과했다: 코드는 줄었지만, 안전성은 그대로다. 방법, 작업별 표, 한계: [benchmarks/results/2026-10-07-agentic.md](../benchmarks/results/2026-10-07-agentic.md).

**규칙은 처음부터 "토큰을 가장 적게"가 아니었다.** 규칙은 이것이다: 작업에 필요한 것만 쓰고, 검증, 오류 처리, 보안, 접근성은 절대 잘라 내지 않는다. 코드가 작아지는 것은 필요한 만큼이기 때문이지, 억지로 줄였기 때문이 아니다. 비용과 지연 시간이 줄어드는 것은 부수 효과다.

## 전 / 후

<p align="center">
  <img src="../assets/v5/beforeafter-ko.png" width="880" alt="프론트엔드에 날짜 선택기를 추가해 줘. 스킬 없음: 335줄, 달력과 날짜 선택기를 손으로 만들었다. Ponytail 5: 저장소의 Input을 type date로 재사용하는 10줄짜리 파일 하나, 그래서 달력은 브라우저가 가져온다.">
</p>

날짜 선택기를 부탁한다. Ponytail이 없으면 에이전트는 날짜 선택기 라이브러리를 설치하거나, 달력 전체를 손으로 만든다: 335줄. Ponytail 5는 먼저 이미 있는 것을 본다: 저장소에는 `Input` 컴포넌트가 있고, 모든 브라우저에는 날짜 선택기가 있다. 그 둘을 합친다. 10줄.

살아남은 예제는 [examples/](../examples/)에 더 있다.

## 작동 방식

<p align="center">
  <img src="../assets/v5/ladder-ko.png" width="880" alt="코드를 쓰기 전에, 성립하는 첫 번째 단계에서 멈춘다: 1 이게 꼭 있어야 하나, 2 이미 이 코드베이스에 있나, 3 표준 라이브러리가 해 주나, 4 플랫폼 기본 기능, 5 이미 설치된 의존성, 6 한 줄로 되나, 7 그다음에야 돌아가는 최소한의 코드, 로직이 있으면 작은 테스트 하나도 함께.">
</p>

이 사다리는 문제를 이해한 *다음에* 돈다. 이해를 대신하지 않는다. 변경이 닿는 코드를 읽고 실제 흐름을 따라간 뒤에 단계를 고른다. 해결책에는 게으르고, 읽기에는 절대 게으르지 않다.

게으르지만 무책임하지는 않다. 신뢰 경계의 입력 검증, 데이터 손실 처리, 보안, 접근성은 절대 잘라 내지 않는다.

분기, 반복문, 파서, 돈이나 보안이 들어간 로직은 작은 테스트 하나를 남긴다. 모든 답변은 건너뛴 것이나 확인하지 않은 것, 그리고 알아야 할 위험으로 끝난다.

## 프롬프트

Ponytail은 프롬프트 하나다: [`skills/ponytail/SKILL.md`](../skills/ponytail/SKILL.md). 규칙 파일을 읽는 에이전트용 압축판은 [`AGENTS.md`](../AGENTS.md)다. 이 저장소의 나머지는 전부 그 프롬프트를 여러 에이전트에 넣기 위한 것이다.

## 설치

**Claude Code**, 프롬프트 두 개로 나눠서:

```
/plugin marketplace add DietrichGebert/ponytail
```
```
/plugin install ponytail@ponytail
```

**Codex:**

```bash
codex plugin marketplace add DietrichGebert/ponytail
codex plugin add ponytail@ponytail
```

그다음 Codex에서 `/hooks`를 열어 라이프사이클 훅 두 개를 신뢰하고, 새 스레드를 시작한다.

**그 밖의 에이전트:** [`AGENTS.md`](../AGENTS.md)를 프로젝트에 복사하거나, 에이전트에게 [`skills/ponytail/SKILL.md`](../skills/ponytail/SKILL.md)를 스킬로 설치해 달라고 하면 된다. Copilot, Cursor, OpenCode, Gemini 등의 단계별 설치 방법(영어): **[INSTALL.md](../INSTALL.md)**.

이게 다다. 그 사람이라면 뿌듯해할 것이다. 말은 안 하겠지만.

모든 세션에서 켜져 있고, 모드를 바꿀 수 있다 ([명령어](#commands) 참고). `/ponytail ultra`는 코드베이스가 당신을 개인적으로 화나게 했을 때를 위한 것이다. 시작할 때와 모드를 바꿀 때 현재 모드가 표시된다.

ponytail은 GitHub의 `DietrichGebert/ponytail`이나 npm의 `@dietrichgebert/ponytail`에서만 설치한다. `.exe`나 `.dll` 파일은 절대 들어 있지 않다. 그런 파일이 들어 있는 사본은 내 것이 아니다.

<a id="commands"></a>
## 명령어

| 명령어 | 하는 일 |
|--------|---------|
| `/ponytail [lite \| full \| ultra \| off]` | 강도를 정하거나 끈다. 인자 없이 쓰면, 꺼져 있을 때는 기본 레벨로 켜고, 켜져 있을 때는 현재 레벨을 알려 준다. |
| `/ponytail default <lite \| full \| ultra \| off>` | 모드를 지속적으로 추적하는 호스트에서 새 세션의 기본 레벨을 설정한다. |

명령어는 스킬을 지원하는 호스트가 있어야 한다 (Claude Code, Codex, Devin CLI, OpenCode, Gemini, Antigravity CLI, pi, Hermes Agent, Qoder, Grok Build). Codex CLI와 IDE 확장에서는 플러그인 네임스페이스 아래의 스킬이므로 `$ponytail:ponytail`처럼 부른다. [훅](../INSTALL.md#cursor)을 쓰는 Cursor는 `/ponytail` 레벨 전환만 되고, 일반 메시지로 입력한다. 지시문만 쓰는 어댑터(Cursor 규칙 파일, Windsurf, Cline, Copilot, Kiro, Antigravity의 `AGENTS.md` 대체 모드)는 명령어 없이 항상 켜진 규칙만 불러온다.

## 자주 묻는 질문

**설정 파일이 필요한가?**
아니다. 선택 사항인 `~/.config/ponytail/config.json`이나 `PONYTAIL_DEFAULT_MODE` 환경 변수로 기본 레벨을 정할 수 있지만, 필요한 것은 없다.

**왜 `shortcut:` 주석을 쓰나?**
의도한 지름길과 언제 다시 볼지를 표시한다. 다른 단어를 쓰거나 아예 빼고 싶다면? 프로젝트의 `CLAUDE.md`나 `AGENTS.md`에 그렇게 적으면 된다.

**120줄짜리 캐시 클래스가 정말 필요하면?**
필요 없다. 그래도 고집하면 만들어 준다. 천천히. 정확하게. 당신을 쳐다보면서.

**확장성은?**
쓰지 않은 코드는 무한히 확장된다. 버그 0개, CVE 0개, 태초부터 가동률 100%.

**왜 "ponytail"인가?**
왜인지 정확히 알 것이다.

## 후원

<p align="center">
  <a href="https://greenpt.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="../assets/logo-greenpt-dark.svg">
      <img src="../assets/logo-greenpt.svg" width="260" alt="GreenPT">
    </picture>
  </a>
</p>

## 라이선스

[MIT](../LICENSE). 돌아가는 가장 짧은 라이선스.

## 스타 기록

<a href="https://www.star-history.com/dietrichgebert/ponytail#history">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=DietrichGebert/ponytail&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=DietrichGebert/ponytail&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=DietrichGebert/ponytail&type=Date" />
 </picture>
</a>
