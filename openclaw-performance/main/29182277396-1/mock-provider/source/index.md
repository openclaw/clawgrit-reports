# OpenClaw Source Performance

Generated: 2026-07-12T06:15:35.397Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5790.2ms | 6397.8ms | 5789.9ms | 5649.0ms | 5722.9ms | 53.7ms | 745.6MB | 1.267 |
| skipChannels | gateway, skip channels | 4457.3ms | 4556.6ms | 4456.6ms | 4369.8ms | 4409.7ms | 40.9ms | 713.4MB | 1.201 |
| oneInternalHook | gateway, one configured internal hook | 4377.1ms | 4621.1ms | 4373.7ms | 4308.1ms | 4347.6ms | 39.3ms | 730.7MB | 1.153 |
| allInternalHooks | gateway, all internal hooks | 4320.7ms | 4692.3ms | 4320.3ms | 4238.7ms | 4283.3ms | 39.6ms | 735.1MB | 1.279 |
| fiftyPlugins | gateway, 50 manifest plugins | 4083.3ms | 4167.1ms | 4082.9ms | 3991.0ms | 4062.6ms | 37.8ms | 742.6MB | 1.265 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3788.6ms | 5055.9ms | 3787.5ms | 3639.8ms | 3724.1ms | 38.7ms | 730.9MB | 1.179 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 836.2MB | 745.6MB | -90.6MB (-10.8%) | -195.2MB (-32.2%) | improved |
| gateway boot | skipChannels | 816.3MB | 713.4MB | -102.8MB (-12.6%) | -114.4MB (-20.8%) | improved |
| gateway boot | oneInternalHook | 820.0MB | 730.7MB | -89.3MB (-10.9%) | -167.7MB (-27.8%) | improved |
| gateway boot | allInternalHooks | 811.6MB | 735.1MB | -76.5MB (-9.4%) | -120.6MB (-21.7%) | stable |
| gateway boot | fiftyPlugins | 778.2MB | 742.6MB | -35.6MB (-4.6%) | -162.4MB (-31.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 781.6MB | 730.9MB | -50.8MB (-6.5%) | -203.9MB (-36.6%) | stable |
| cli | gatewayHealthJson | 57.0MB | 57.5MB | +0.5MB (+0.8%) | n/a | stable |
| cli | configGetGatewayPort | 57.1MB | 57.7MB | +0.5MB (+0.9%) | n/a | stable |
| mock hello | gateway RSS delta avg | 27.8MB | 28.1MB | +0.2MB (+0.9%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 528.5MB | 485.4MB | ok |
| codex | 483.9MB | 440.8MB | ok |
| anthropic | 448.6MB | 405.5MB | ok |
| xai | 429.8MB | 386.7MB | ok |
| active-memory | 425.2MB | 382.1MB | ok |
| llm-task | 422.4MB | 379.3MB | ok |
| migrate-hermes | 422.4MB | 379.3MB | ok |
| openai | 393.5MB | 350.5MB | ok |
| voice-call | 392.8MB | 349.8MB | ok |
| google | 376.1MB | 333.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 4212.5ms | 4264.5ms |
| default | cli.main.gateway-run-bootstrap | 3256.7ms | 3371.3ms |
| default | post-attach.update-sentinel.total | 1197.7ms | 1656.4ms |
| default | sidecars.restart-sentinel.total | 1197.0ms | 1655.7ms |
| default | sidecars.session-locks.total | 1196.3ms | 1654.8ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3249.7ms | 3293.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2641.5ms | 2681.9ms |
| skipChannels | post-attach.update-sentinel.total | 1012.5ms | 1083.8ms |
| skipChannels | sidecars.restart-sentinel.total | 1012.0ms | 1083.1ms |
| skipChannels | sidecars.session-locks.total | 1011.2ms | 1082.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3168.2ms | 3311.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2569.8ms | 2699.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 1074.3ms | 1092.1ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1073.7ms | 1091.5ms |
| oneInternalHook | sidecars.session-locks.total | 1072.8ms | 1090.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3131.5ms | 3406.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2527.5ms | 2769.7ms |
| allInternalHooks | post-attach.update-sentinel.total | 1053.5ms | 1098.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1052.9ms | 1098.3ms |
| allInternalHooks | sidecars.session-locks.total | 1052.2ms | 1097.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3061.4ms | 3153.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2467.2ms | 2501.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 793.3ms | 837.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 792.7ms | 836.9ms |
| fiftyPlugins | sidecars.session-locks.total | 792.0ms | 836.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2980.1ms | 4258.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2407.5ms | 3536.8ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 725.7ms | 730.0ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 584.1ms | 586.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 572.6ms | 721.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8870.0ms | 0.113 | 794.9MB | 822.2MB | 27.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8542.0ms | 0.117 | 791.4MB | 819.8MB | 28.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8561.0ms | 0.117 | 794.4MB | 823.0MB | 28.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2915.5ms | 3005.2ms | 57.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 647.4ms | 653.6ms | 57.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.7MB | 0.0MB | 0.0ms | 36.4ms |

## Observations

No data.

