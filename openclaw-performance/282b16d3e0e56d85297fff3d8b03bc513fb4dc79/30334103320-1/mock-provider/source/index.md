# OpenClaw Source Performance

Generated: 2026-07-28T06:20:17.997Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6170.4ms | 6213.6ms | 6170.3ms | 3030.6ms | 5825.9ms | 222.2ms | 1161.4MB | 1.332 |
| skipChannels | gateway, skip channels | 6487.1ms | 6957.5ms | 6149.3ms | 3212.0ms | 3258.0ms | 225.3ms | 1143.3MB | 1.301 |
| oneInternalHook | gateway, one configured internal hook | 7632.3ms | 7742.0ms | 7632.3ms | 4996.6ms | 5045.0ms | 256.8ms | 1291.0MB | 1.336 |
| allInternalHooks | gateway, all internal hooks | 6793.4ms | 7641.7ms | 6793.4ms | 4424.5ms | 4457.9ms | 212.1ms | 1303.4MB | 1.325 |
| fiftyPlugins | gateway, 50 manifest plugins | 8744.9ms | 8826.9ms | 8766.4ms | 4348.5ms | 4429.4ms | 212.7ms | 1209.4MB | 1.258 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8589.3ms | 8998.8ms | 8589.3ms | 4050.8ms | 4142.2ms | 211.1ms | 1179.6MB | 1.294 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 546.6MB | 500.0MB | ok |
| llm-task | 532.6MB | 486.0MB | ok |
| active-memory | 532.5MB | 485.9MB | ok |
| workboard | 528.3MB | 481.7MB | ok |
| voice-call | 526.6MB | 480.0MB | ok |
| opencode | 520.4MB | 473.8MB | ok |
| migrate-hermes | 511.7MB | 465.1MB | ok |
| anthropic | 507.8MB | 461.2MB | ok |
| xai | 506.7MB | 460.1MB | ok |
| teams-meetings | 505.2MB | 458.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.gateway-handler.channels.total | 4021.2ms | 4064.0ms |
| default | post-ready.gateway-handler.board.total | 4004.8ms | 4048.4ms |
| default | post-ready.gateway-handler.agent-identity.total | 3963.2ms | 4009.3ms |
| default | post-ready.gateway-handler.models-auth-status.total | 3951.0ms | 4002.9ms |
| default | post-ready.gateway-handler.cron.total | 3936.3ms | 3986.4ms |
| skipChannels | post-ready.gateway-handler.channels.total | 4258.3ms | 4793.2ms |
| skipChannels | post-ready.gateway-handler.board.total | 4244.8ms | 4775.3ms |
| skipChannels | post-ready.gateway-handler.agent-identity.total | 4207.3ms | 4733.7ms |
| skipChannels | post-ready.gateway-handler.models-auth-status.total | 4202.9ms | 4720.8ms |
| skipChannels | post-ready.gateway-handler.cron.total | 4188.3ms | 4708.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3773.9ms | 3788.6ms |
| oneInternalHook | post-ready.gateway-handler.channels.total | 3451.9ms | 3544.6ms |
| oneInternalHook | post-ready.maintenance.total | 3420.9ms | 3509.2ms |
| oneInternalHook | post-ready.gateway-handler.board.total | 3389.5ms | 3470.3ms |
| oneInternalHook | post-ready.gateway-handler.agent-identity.total | 3338.3ms | 3409.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3260.8ms | 3799.4ms |
| allInternalHooks | post-ready.gateway-handler.channels.total | 3255.3ms | 3323.1ms |
| allInternalHooks | post-ready.gateway-handler.board.total | 3239.8ms | 3307.0ms |
| allInternalHooks | post-ready.gateway-handler.agent-identity.total | 3134.1ms | 3259.3ms |
| allInternalHooks | post-ready.gateway-handler.models-auth-status.total | 3124.2ms | 3255.3ms |
| fiftyPlugins | post-ready.gateway-handler.channels.total | 5280.8ms | 5318.9ms |
| fiftyPlugins | post-ready.gateway-handler.board.total | 5264.1ms | 5306.5ms |
| fiftyPlugins | post-ready.gateway-handler.agent-identity.total | 5222.0ms | 5257.2ms |
| fiftyPlugins | post-ready.gateway-handler.models-auth-status.total | 5218.0ms | 5253.3ms |
| fiftyPlugins | post-ready.gateway-handler.cron.total | 5205.0ms | 5243.1ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.channels.total | 5132.7ms | 5492.9ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.board.total | 5116.9ms | 5477.4ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.agent-identity.total | 5073.1ms | 5424.6ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.models-auth-status.total | 5065.1ms | 5419.0ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.cron.total | 5054.5ms | 5403.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10744.0ms | 0.000 | 2489.0MB | 1211.3MB | -1277.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10422.0ms | 0.288 | 983.2MB | 1048.1MB | 64.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10959.0ms | 0.182 | 990.3MB | 1032.9MB | 42.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3879.8ms | 3981.5ms | 187.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 941.4ms | 982.8ms | 187.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 143.5ms |

## Observations

No data.

