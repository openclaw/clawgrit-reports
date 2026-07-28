# OpenClaw Source Performance

Generated: 2026-07-28T08:50:59.090Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6113.8ms | 6181.0ms | 6113.9ms | 2927.3ms | 5824.5ms | 212.0ms | 1165.8MB | 1.343 |
| skipChannels | gateway, skip channels | 7024.4ms | 7693.4ms | 7023.9ms | 3323.7ms | 3379.7ms | 218.3ms | 1148.4MB | 1.300 |
| oneInternalHook | gateway, one configured internal hook | 7537.9ms | 7806.6ms | 7537.8ms | 4649.5ms | 4690.6ms | 240.7ms | 1307.2MB | 1.327 |
| allInternalHooks | gateway, all internal hooks | 6926.1ms | 6993.4ms | 6926.0ms | 4515.0ms | 4558.4ms | 224.9ms | 1308.8MB | 1.300 |
| fiftyPlugins | gateway, 50 manifest plugins | 8862.2ms | 8976.3ms | 8862.1ms | 4379.9ms | 4462.6ms | 218.1ms | 1194.3MB | 1.300 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8413.8ms | 8461.5ms | 8413.7ms | 3992.9ms | 4077.6ms | 205.1ms | 1150.7MB | 1.198 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 574.5MB | 528.0MB | ok |
| opencode | 545.0MB | 498.5MB | ok |
| voice-call | 537.9MB | 491.4MB | ok |
| codex | 536.7MB | 490.2MB | ok |
| active-memory | 534.8MB | 488.3MB | ok |
| migrate-hermes | 513.3MB | 466.8MB | ok |
| teams-meetings | 512.8MB | 466.3MB | ok |
| workboard | 510.8MB | 464.3MB | ok |
| zoom-meetings | 509.0MB | 462.6MB | ok |
| llm-task | 507.6MB | 461.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.gateway-handler.channels.total | 4054.2ms | 4089.6ms |
| default | post-ready.gateway-handler.board.total | 4036.5ms | 4076.0ms |
| default | post-ready.gateway-handler.agent-identity.total | 3994.6ms | 4028.8ms |
| default | post-ready.gateway-handler.models-auth-status.total | 3981.6ms | 4023.8ms |
| default | post-ready.gateway-handler.cron.total | 3968.3ms | 4010.8ms |
| skipChannels | post-ready.maintenance.total | 4488.4ms | 5283.8ms |
| skipChannels | post-ready.gateway-handler.channels.total | 4470.4ms | 5502.7ms |
| skipChannels | post-ready.gateway-handler.board.total | 4455.9ms | 5480.0ms |
| skipChannels | post-ready.gateway-handler.agent-identity.total | 4402.3ms | 5430.6ms |
| skipChannels | post-ready.gateway-handler.models-auth-status.total | 4397.5ms | 5414.6ms |
| oneInternalHook | post-ready.gateway-handler.channels.total | 3664.2ms | 3720.8ms |
| oneInternalHook | post-ready.gateway-handler.board.total | 3601.2ms | 3701.7ms |
| oneInternalHook | post-ready.maintenance.total | 3582.7ms | 3632.8ms |
| oneInternalHook | post-ready.gateway-handler.agent-identity.total | 3548.3ms | 3656.4ms |
| oneInternalHook | post-ready.gateway-handler.models-auth-status.total | 3543.9ms | 3645.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3338.7ms | 3394.2ms |
| allInternalHooks | post-ready.gateway-handler.channels.total | 3249.4ms | 3324.2ms |
| allInternalHooks | post-ready.gateway-handler.board.total | 3233.4ms | 3308.6ms |
| allInternalHooks | post-ready.gateway-handler.agent-identity.total | 3177.6ms | 3252.2ms |
| allInternalHooks | post-ready.gateway-handler.models-auth-status.total | 3173.2ms | 3247.9ms |
| fiftyPlugins | post-ready.gateway-handler.channels.total | 5267.3ms | 5328.9ms |
| fiftyPlugins | post-ready.gateway-handler.board.total | 5255.1ms | 5313.3ms |
| fiftyPlugins | post-ready.gateway-handler.agent-identity.total | 5204.4ms | 5262.3ms |
| fiftyPlugins | post-ready.gateway-handler.models-auth-status.total | 5200.6ms | 5258.6ms |
| fiftyPlugins | post-ready.gateway-handler.cron.total | 5190.8ms | 5249.0ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.channels.total | 5010.4ms | 5014.3ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.board.total | 4998.8ms | 5002.3ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.agent-identity.total | 4944.8ms | 4947.5ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.models-auth-status.total | 4941.0ms | 4943.4ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.cron.total | 4930.8ms | 4933.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10955.0ms | 0.000 | 2634.0MB | 1241.1MB | -1393.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10484.0ms | 0.286 | 1028.3MB | 1273.9MB | 245.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10647.0ms | 0.188 | 972.0MB | 1018.1MB | 46.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4428.9ms | 5189.1ms | 187.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1212.9ms | 1273.6ms | 188.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 230.8ms |

## Observations

No data.

