# OpenClaw Source Performance

Generated: 2026-07-29T18:38:57.793Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7049.6ms | 7072.6ms | 7017.3ms | 3356.3ms | 6386.6ms | 231.1ms | 1106.6MB | 1.329 |
| skipChannels | gateway, skip channels | 3378.0ms | 9097.8ms | 3377.7ms | 3304.9ms | 3320.3ms | 232.1ms | 1017.9MB | 1.481 |
| oneInternalHook | gateway, one configured internal hook | 5693.4ms | 8717.9ms | 5693.9ms | 5609.8ms | 5620.8ms | 290.0ms | 1172.8MB | 1.405 |
| allInternalHooks | gateway, all internal hooks | 8900.7ms | 9182.2ms | 8985.9ms | 5606.9ms | 5618.6ms | 266.3ms | 1155.1MB | 1.335 |
| fiftyPlugins | gateway, 50 manifest plugins | 10546.8ms | 10997.5ms | 10546.8ms | 3565.1ms | 3623.0ms | 291.2ms | 1037.2MB | 1.325 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 11549.1ms | 11908.1ms | 11549.1ms | 3963.6ms | 4063.7ms | 301.8ms | 1033.0MB | 1.344 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 579.1MB | 533.0MB | ok |
| memory-lancedb | 568.2MB | 522.1MB | ok |
| codex | 548.2MB | 502.2MB | ok |
| opencode | 537.7MB | 491.6MB | ok |
| acpx | 524.4MB | 478.3MB | ok |
| openai | 521.2MB | 475.1MB | ok |
| google-meet | 516.0MB | 469.9MB | ok |
| anthropic | 514.7MB | 468.6MB | ok |
| migrate-hermes | 507.1MB | 461.0MB | ok |
| active-memory | 506.8MB | 460.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.gateway-data.plugins.total | 4827.7ms | 4884.4ms |
| default | post-ready.gateway-data.session-catalog.main.total | 4721.4ms | 4920.9ms |
| default | sidecars.session-locks.total | 4706.1ms | 4781.7ms |
| default | post-ready.agent-runtime-plugins.total | 4596.9ms | 4609.4ms |
| default | post-ready.gateway-data.sessions.main.total | 4593.9ms | 4606.2ms |
| skipChannels | post-ready.gateway-data.plugins.total | 6602.9ms | 6602.9ms |
| skipChannels | sidecars.session-locks.total | 6451.8ms | 6451.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 6363.6ms | 6363.6ms |
| skipChannels | post-ready.gateway-data.sessions.main.total | 6359.8ms | 6359.8ms |
| skipChannels | post-attach.update-sentinel.total | 5971.4ms | 5971.4ms |
| oneInternalHook | post-ready.gateway-data.plugins.total | 4161.4ms | 4161.4ms |
| oneInternalHook | sidecars.session-locks.total | 4009.9ms | 4009.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3988.2ms | 4273.5ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3923.5ms | 3923.5ms |
| oneInternalHook | post-ready.gateway-data.sessions.main.total | 3919.6ms | 3919.6ms |
| allInternalHooks | post-ready.gateway-data.plugins.total | 4542.8ms | 4665.7ms |
| allInternalHooks | sidecars.session-locks.total | 4340.9ms | 4478.1ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 4249.4ms | 4334.6ms |
| allInternalHooks | post-ready.gateway-data.sessions.main.total | 4244.3ms | 4330.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4155.1ms | 4212.4ms |
| fiftyPlugins | post-ready.gateway-data.plugins.total | 8120.8ms | 8326.2ms |
| fiftyPlugins | post-ready.maintenance.total | 7880.1ms | 8055.5ms |
| fiftyPlugins | sidecars.session-locks.total | 7837.8ms | 7999.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 7740.8ms | 7917.8ms |
| fiftyPlugins | post-ready.gateway-data.sessions.main.total | 7736.4ms | 7914.4ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.session-catalog.main.total | 8888.0ms | 8888.0ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins.total | 8519.4ms | 8864.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 8369.8ms | 8715.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 8275.3ms | 8605.6ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.sessions.main.total | 8272.0ms | 8600.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 14888.0ms | 0.000 | 2620.1MB | 1195.5MB | -1424.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13810.0ms | 0.145 | 1037.5MB | 1055.3MB | 17.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12950.0ms | 0.154 | 1035.8MB | 1168.7MB | 132.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 784.1ms | 851.1ms | 187.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 942.5ms | 1023.3ms | 186.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 154.3ms |

## Observations

No data.

