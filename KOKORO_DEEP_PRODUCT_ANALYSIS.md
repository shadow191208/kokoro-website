# Kokoro Deep Product Analysis

> Phạm vi và phương pháp: Báo cáo này được xây dựng từ toàn bộ nội dung hiện có trong `review.md`. Báo cáo không sử dụng web research và không tự giả định database, Supabase schema, source code, API, số lượng người dùng, analytics, retention thực tế, doanh thu, app-store data, notification system hoặc AI system.
>
> Quy ước bằng chứng:
> - **[FROM REVIEW]**: thông tin được nói trực tiếp trong `review.md`.
> - **[INFERENCE]**: nhận định suy ra hợp lý từ các thông tin trong `review.md`, không phải fact đã được xác nhận.
> - **[RECOMMENDATION]**: đề xuất mới cho Product Owner/đội ngũ sản phẩm.

## 1. Executive Summary

### Kokoro hiện tại thực sự là sản phẩm gì?

**[FROM REVIEW]** Kokoro được mô tả là một ứng dụng giúp người dùng ghi lại cảm xúc, suy nghĩ, sự kiện và những khoảnh khắc đáng nhớ mỗi ngày. Trải nghiệm cốt lõi được lấy cảm hứng từ sổ tay và nhật ký: gần gũi, riêng tư, theo dòng thời gian và đủ nhẹ để người dùng có thể bắt đầu bằng một vài dòng. Ứng dụng có hai hướng sử dụng song song: không gian cá nhân để tự nhìn lại bản thân và không gian nhóm để chia sẻ, khích lệ, duy trì mục tiêu hoặc thói quen cùng người khác.

**[INFERENCE]** Kokoro hiện không nên được xem là một mood tracker thuần túy, vì mood chỉ là một phần của hành trình ghi lại suy nghĩ và sự kiện. Kokoro cũng chưa nên được định nghĩa là một habit app hay productivity app, vì `review.md` không mô tả cơ chế theo dõi nhiệm vụ, năng suất hay thói quen như trung tâm. Group tạo ra lớp social/accountability đáng chú ý, nhưng tài liệu chưa chứng minh rằng chat, task hoặc feed xã hội là sản phẩm cốt lõi.

Vị trí hợp lý nhất của Kokoro là một **private self-reflection journal có lớp group đồng hành chọn lọc**. Người dùng đến trước hết để ghi lại điều đang diễn ra bên trong mình; họ quay lại để viết tiếp, nhìn lại hành trình và nhận cảm giác được đồng hành. Group không nên biến Kokoro thành mạng xã hội đại trà. Nó nên là một không gian nhỏ, có chủ đề, có mục tiêu hoặc có mối quan tâm chung, trong đó sự chia sẻ phục vụ cho việc duy trì tinh thần và hành trình cá nhân.

Điểm mạnh của concept là sự kết hợp giữa ba giá trị: **self-understanding**, **memory/reflection** và **connection/motivation**. Journal tạo ra dữ liệu và gắn bó cá nhân. Trải nghiệm theo ngày biến dữ liệu đó thành một hành trình có thể nhìn lại. Group bổ sung accountability và sự động viên. Nếu ba lớp này được nối bằng một core loop rõ ràng, Kokoro có thể khác biệt hơn một ứng dụng ghi chú hoặc mood tracker đơn giản.

Điểm yếu hiện tại là concept đang mở ra quá nhiều hướng: nhật ký, cảm xúc, sức khỏe tinh thần, phát triển bản thân, thói quen, mục tiêu, nhóm và cộng đồng. **[INFERENCE]** Nếu mỗi hướng đều được biến thành một hệ thống độc lập, Kokoro có nguy cơ trở thành một “super app” trước khi chứng minh được giá trị của một hành động cốt lõi. Người dùng có thể không biết nên mở app để viết, check-in, làm task, chat hay xem hoạt động nhóm. Đây là rủi ro định vị và UX lớn hơn việc thiếu feature.

Vì vậy, sản phẩm nên bắt đầu bằng thesis: người dùng cần một nơi đủ riêng tư và ít ma sát để ghi lại ngày của mình, sau đó có thể nhìn thấy hành trình và chọn chia sẻ một phần với nhóm phù hợp. Core product không phải “có thật nhiều cách để tương tác”, mà là **giúp người dùng biến một khoảnh khắc cảm xúc hoặc một sự kiện trong ngày thành một mẩu nhật ký có ý nghĩa, rồi quay lại vì họ muốn tiếp tục hành trình đó**.

### Primary Product Category

**Self-reflection / Digital Journal.** Đây là category chính vì journal, cảm xúc, suy nghĩ, sự kiện và dòng thời gian được mô tả trực tiếp và liên tục trong `review.md`.

### Secondary Product Category

**Private Community / Group Accountability.** Group được mô tả như không gian theo chủ đề hoặc mục tiêu, dùng để chia sẻ, khích lệ và duy trì động lực. Đây là lớp quan trọng nhưng nên phụ thuộc vào giá trị cá nhân.

### Supporting Categories

- **Mood Tracker:** mood/cảm xúc là một cách bắt đầu ghi nhận trạng thái, nhưng tài liệu chưa xác định hệ thống mood chi tiết.
- **Memory / Digital Diary:** lưu lại khoảnh khắc và xem lại hành trình theo ngày.
- **Mental Well-being Support:** hỗ trợ tự quan sát và chăm sóc tinh thần, không phải sản phẩm y tế hay trị liệu.
- **Habit Support:** group có thể giúp duy trì thói quen, nhưng habit system chưa được xác nhận là feature hiện tại.

### Không nên định vị Kokoro là gì

**[RECOMMENDATION]** Không nên mở đầu bằng “mạng xã hội cảm xúc”, “ứng dụng quản lý năng suất” hoặc “ứng dụng điều trị sức khỏe tinh thần”. Ba cách gọi này lần lượt tạo áp lực social, kéo scope sang task/productivity và tạo rủi ro claim y tế. Kokoro nên được hiểu trước hết là một không gian nhật ký có tính đồng hành.

## 2. Product Definition

### Product category map

| Category | Vai trò trong Kokoro | Mức độ bằng chứng |
| --- | --- | --- |
| Digital Journal | Ghi lại suy nghĩ, sự kiện, cảm xúc theo ngày | [FROM REVIEW] Core |
| Self-reflection App | Nhìn lại cảm xúc và hành trình cá nhân | [FROM REVIEW] Core value |
| Mood Tracker | Điểm vào nhanh cho việc ghi nhận cảm xúc | [INFERENCE] Cần xác nhận |
| Memory App | Lưu giữ khoảnh khắc và xem lại ngày cũ | [FROM REVIEW] Supporting |
| Private Community | Chia sẻ trong nhóm phù hợp | [FROM REVIEW] Important |
| Group Accountability | Duy trì mục tiêu/thói quen cùng người khác | [FROM REVIEW] Important |
| Habit App | Có thể hỗ trợ thói quen qua group | [INFERENCE] Chưa phải core |
| Productivity App | Không phải định vị hiện tại | [RECOMMENDATION] Không ưu tiên |
| Medical/Therapy App | Không thuộc phạm vi an toàn | [RECOMMENDATION] Không định vị |

### Product boundary

**[RECOMMENDATION]** Boundary nên được phát biểu như sau: “Kokoro giúp người dùng ghi lại và nhìn lại đời sống tinh thần cá nhân; khi muốn, họ có thể kết nối với một nhóm nhỏ để được đồng hành.” Bất kỳ feature nào không phục vụ ít nhất một trong ba động từ **ghi lại — nhìn lại — đồng hành** cần bị hoãn hoặc loại khỏi core roadmap.

## 3. Product Thesis

### Current Product Thesis

**[FROM REVIEW]** Kokoro giúp người trẻ, người bận rộn và những người muốn chăm sóc đời sống tinh thần thực hiện việc ghi lại cảm xúc, suy nghĩ và hành trình mỗi ngày bằng trải nghiệm sổ tay — nhật ký, khác với ứng dụng ghi chú khô cứng vì có không gian giao diện cá nhân hóa sáng/tối và khả năng kết nối nhóm để nhận động lực.

### Recommended Product Thesis

**[RECOMMENDATION]** Kokoro giúp **những người muốn hiểu và chăm sóc đời sống tinh thần của mình** thực hiện **việc ghi lại một khoảnh khắc trong ngày, nhìn lại hành trình và duy trì một mục tiêu nhỏ** bằng cách **kết hợp journal riêng tư, trải nghiệm theo dòng thời gian và group đồng hành có kiểm soát** khác với **journal hoặc mood tracker đơn lẻ** vì **Kokoro nối reflection cá nhân với sự khích lệ của một cộng đồng nhỏ mà không biến dữ liệu cảm xúc thành nội dung công khai mặc định**.

### Strategic interpretation

**[INFERENCE]** Thesis này đặt journal làm trung tâm, calendar/memory làm vòng lặp dài hạn và group làm bộ khuếch đại retention. Nếu group được đặt trước journal, Kokoro dễ bị kéo về hướng social app; nếu bỏ group hoàn toàn, điểm khác biệt rõ nhất trong `review.md` bị mất.

## 4. Jobs To Be Done

### Functional Jobs

| Job | Importance | Frequency | Existing Feature Supporting It | Possible UX Friction |
| --- | --- | --- | --- | --- |
| Ghi lại cảm xúc trong ngày | Critical | Hằng ngày hoặc khi cảm xúc nổi bật | Journal cá nhân, mood/cảm xúc | Không biết bắt đầu từ đâu; form quá dài |
| Ghi lại sự kiện/khoảnh khắc | High | Hằng ngày hoặc vài lần/tuần | Nhật ký theo ngày | Khó tìm lại nếu timeline không rõ |
| Nhìn lại hành trình cá nhân | High | Hằng tuần/tháng hoặc khi cần | Dòng thời gian, nhật ký | Không có cách tổng hợp dễ hiểu |
| Lưu giữ kỷ niệm | High | Không đều; giá trị tăng theo thời gian | Journal và trải nghiệm nhật ký | Nội dung bị chôn trong danh sách |
| Tạo/tham gia nhóm theo mục tiêu | High | Khi bắt đầu hoặc theo chu kỳ mục tiêu | Group | Group quá rộng, không rõ mục tiêu |
| Chia sẻ tiến độ hoặc trải nghiệm | Medium | Theo hoạt động nhóm | Group, chia sẻ, động viên | Sợ lộ thông tin riêng tư |
| Nhận và trao động viên | High | Khi có bài viết/hoạt động nhóm | Group | Thông báo quá nhiều hoặc thiếu an toàn |
| Duy trì thói quen ghi lại | High | Hằng ngày | [INFERENCE] Group có thể hỗ trợ | Reminder tạo áp lực |

### Emotional Jobs

| Job | Importance | Frequency | Feature hỗ trợ | Friction |
| --- | --- | --- | --- | --- |
| Muốn được lắng nghe | Critical | Khi có cảm xúc cần xử lý | Journal riêng tư, group | Không tin rằng không gian an toàn |
| Muốn thấy nhẹ lòng hơn | High | Sau ngày căng thẳng | Viết nhật ký | CTA quá productivity hoặc phán xét |
| Muốn hiểu bản thân | Critical | Liên tục theo thời gian | Reflection, timeline | Không nhìn thấy pattern/hành trình |
| Muốn cảm thấy không cô đơn | High | Khi khó khăn hoặc cần động lực | Group đồng hành | Group biến thành social noise |
| Muốn ghi nhận tiến bộ nhỏ | High | Trong quá trình theo đuổi mục tiêu | Group, nhật ký | Streak/điểm số gây so sánh |

### Social Jobs

| Job | Importance | Frequency | Feature hỗ trợ | Friction |
| --- | --- | --- | --- | --- |
| Đồng hành với bạn bè/người cùng mục tiêu | High | Theo chu kỳ mục tiêu | Tạo/tham gia Group | Không rõ ai được xem gì |
| Chia sẻ tiến độ vừa đủ | High | Theo hoạt động | Group sharing | Chia sẻ nhầm note/photo/voice |
| Nhận động viên tích cực | High | Theo tương tác | Group responses | Phản hồi tiêu cực, moderation |
| Cảm thấy thuộc về một cộng đồng nhỏ | Medium/High | Hằng tuần | Group identity | Group vắng hoặc quá đông |

**[INFERENCE]** Job “giải quyết vấn đề y tế/tâm lý” không được xem là job của Kokoro vì `review.md` chỉ nói về self-observation, emotional support và self-care. Đây là ranh giới an toàn cần giữ trong product và marketing.

## 5. Core Value

### Giá trị cốt lõi

**[INFERENCE] Core Value:** Self-understanding thông qua việc ghi lại và nhìn lại những gì người dùng trải qua mỗi ngày. Nếu bỏ journal/reflection, Kokoro mất lý do tồn tại riêng và trở thành một group/community app chung chung.

### Supporting Value

- **Memory:** biến ngày thường thành những mốc có thể tìm lại.
- **Connection:** cho phép chia sẻ có chọn lọc với người đồng hành.
- **Motivation:** giúp duy trì hành trình qua sự khích lệ.
- **Emotional comfort:** tạo cảm giác được lắng nghe, không phán xét.
- **Privacy:** là điều kiện để người dùng dám viết thật.
- **Habit:** là kết quả mong muốn của trải nghiệm ít ma sát, không nhất thiết phải là một hệ thống gamification.

### Potentially Distracting Value

- **Productivity:** task/focus dễ kéo sản phẩm sang quản lý công việc.
- **Open social discovery:** feed công khai dễ kéo sang mạng xã hội và làm giảm riêng tư.
- **Gamification cạnh tranh:** leaderboard, điểm số hoặc streak cứng có thể mâu thuẫn với emotional safety.
- **Media collection:** ảnh/voice/album có thể biến Kokoro thành kho lưu trữ nếu không gắn với reflection.
- **Mental health claims:** tuyên bố chẩn đoán hoặc điều trị làm tăng rủi ro trust và compliance.

### Kokoro có đang cố giải quyết quá nhiều vấn đề không?

**[INFERENCE] Có dấu hiệu đang mở rộng quá rộng, nhưng chưa phải vấn đề không thể giải quyết.** Nền tảng hợp lý là journal + reflection + group đồng hành. Mood, calendar, task, focus, chat, album và habit chỉ nên là cách triển khai hoặc supporting layer. Nếu mỗi domain trở thành một tab, object và notification riêng, người dùng sẽ không nhận ra đâu là hành động chính.

## 6. Product Loops

### Loop A — Personal Loop

| Thành phần | Phân tích |
| --- | --- |
| Trigger | Có cảm xúc, sự kiện hoặc khoảnh khắc muốn ghi lại; [RECOMMENDATION] prompt nhẹ theo thời điểm |
| Action | Mở Kokoro, ghi mood/cảm xúc và một đoạn journal ngắn |
| Immediate Reward | Cảm giác đã đặt suy nghĩ ra ngoài và giữ lại được khoảnh khắc |
| Long-term Reward | Hiểu bản thân hơn, có lịch sử để nhìn lại |
| Return Mechanism | Dòng thời gian tiếp tục, personal attachment, [RECOMMENDATION] reflection prompt |
| Possible Drop-off | Form quá dài, không biết viết gì, privacy không rõ, không có phản hồi tức thời |

### Loop B — Group Loop

| Thành phần | Phân tích |
| --- | --- |
| Trigger | Mục tiêu chung, lời mời nhóm, một thành viên cần động viên |
| Action | Vào group, chia sẻ tiến độ/trải nghiệm phù hợp, phản hồi hoặc khích lệ |
| Immediate Reward | Cảm giác được đồng hành và nhìn thấy người khác cũng đang cố gắng |
| Long-term Reward | Duy trì mục tiêu, hình thành quan hệ và thói quen hỗ trợ |
| Return Mechanism | Hoạt động nhóm có ý nghĩa, phản hồi phù hợp, mục tiêu chung |
| Possible Drop-off | Group vắng, chat noise, áp lực phải chia sẻ, notification fatigue, chia sẻ nhầm |

### Loop C — Long-term Memory Loop

| Thành phần | Phân tích |
| --- | --- |
| Trigger | Muốn xem lại một giai đoạn, ngày kỷ niệm hoặc thay đổi của bản thân |
| Action | Mở calendar/timeline, chọn ngày, đọc lại entry và nhận ra hành trình |
| Immediate Reward | Cảm giác kết nối với ký ức và thấy tiến bộ/biến chuyển |
| Long-term Reward | Personal attachment, giá trị lưu trữ tăng theo thời gian |
| Return Mechanism | Kho dữ liệu cá nhân ngày càng giàu, các mốc reflection định kỳ |
| Possible Drop-off | Calendar chỉ là date picker; dữ liệu ít; không có preview; tìm kiếm kém |

**[RECOMMENDATION]** Core loop nên là `Trigger → Quick entry → Save privately → See today represented → Return to reflect`, trong đó group là một nhánh opt-in chứ không phải điều kiện để journal có giá trị.

## 7. Retention

`review.md` không cung cấp analytics hoặc retention thực tế. Phần dưới là giả thuyết sản phẩm và đề xuất kiểm chứng, không phải kết quả đo lường.

### D0 — Ngày cài app

**[RECOMMENDATION]** User cần hiểu trong vài phút rằng Kokoro là một không gian riêng để ghi lại điều trong lòng. Activation nên là `First Journal Entry Saved` hoặc `First Reflection Saved`, với mood nhanh là tùy chọn. Nếu onboarding bắt user thiết lập quá nhiều mục tiêu hoặc tham gia group trước khi viết, value moment bị trì hoãn.

### D1 — Ngày tiếp theo

**[INFERENCE]** Driver mạnh nhất có thể là personal attachment: user muốn viết tiếp hoặc xem lại entry hôm qua. [RECOMMENDATION] Reminder nên mời gọi nhẹ nhàng, không dùng ngôn ngữ “bạn đã bỏ lỡ” hay “chuỗi ngày bị đứt”.

### D7 — Một tuần

**[RECOMMENDATION]** Driver cần kiểm chứng là weekly reflection: người dùng thấy các ngày đã ghi và nhận ra một pattern hoặc tiến bộ. Group có thể hỗ trợ nếu group có mục tiêu rõ và hoạt động không gây áp lực.

### D30 — Một tháng

**[RECOMMENDATION]** Calendar/memory nên bắt đầu tạo giá trị cảm xúc rõ rệt: xem lại tháng, các mốc đáng nhớ, những ngày đã được ghi. Streak chỉ nên là metadata tùy chọn; không nên là reward chính.

### D180 — Sáu tháng

**[INFERENCE]** Retention dài hạn có khả năng đến từ accumulated personal history và cảm giác “đây là cuốn nhật ký của tôi”, cộng với một group có quan hệ bền vững. Không có đủ thông tin để kết luận media, task, chat hay notification sẽ giữ user sau sáu tháng.

### Retention driver ranking

| Driver | Trạng thái | Vai trò |
| --- | --- | --- |
| Personal attachment | [INFERENCE] | Mạnh nhất nếu journal tạo cảm giác sở hữu |
| Mood history | [RECOMMENDATION] | Tóm tắt trạng thái, không thay journal |
| Calendar/memory | [FROM REVIEW] + [RECOMMENDATION] | Cầu nối từ ghi chép sang reflection |
| Group | [FROM REVIEW] | Khuếch đại motivation, cần an toàn |
| Notification | [RECOMMENDATION] | Kích hoạt lại, không phải value cốt lõi |
| Streak | [RECOMMENDATION] | Chỉ nên thử nghiệm thận trọng |
| Task/chat/focus | [RECOMMENDATION] | Không xem là retention driver hiện tại |
| Stored media | [RECOMMENDATION] | Supporting nếu gắn với memory |

## 8. Feature Audit

| Feature | User problem | Product value | Frequency | Retention impact | Complexity | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Quick journal entry | Không biết viết ở đâu | Core self-reflection | Daily | High | Low | P0 — Core |
| Mood check-in | Cần bắt đầu nhanh bằng cảm xúc | Entry point cho reflection | Daily/as needed | Medium/High | Medium | P0 — Core |
| Day/timeline view | Khó nhìn entry theo ngày | Tạo cảm giác nhật ký | Daily/weekly | High | Medium | P0 — Core |
| Private-by-default save | Sợ lộ dữ liệu nhạy cảm | Trust và honesty | Every entry | Critical | Medium | P0 — Core |
| Calendar reflection | Muốn xem lại hành trình | Long-term memory | Weekly/monthly | High | Medium | P1 — Important |
| Group create/join | Cần đồng hành | Differentiation và motivation | Weekly/goal-based | High | High | P1 — Important |
| Group sharing | Muốn chia sẻ vừa đủ | Social support | As needed | Medium/High | High | P1 — Important |
| Group reactions/support | Muốn được động viên | Immediate social reward | As needed | Medium | Medium | P1 — Important |
| Light/dark mode | Cần trải nghiệm phù hợp thời điểm | Comfort và identity | Every session | Medium | Low/Medium | P1 — Important |
| Reflection summary | Không thấy ý nghĩa dữ liệu | Synthesis | Weekly/monthly | High | Medium/High | P1 — Important |
| Reminder | Quên quay lại | Re-engagement | Optional | Medium | Medium | P2 — Useful |
| Photo in entry | Muốn lưu khoảnh khắc | Rich memory | Occasional | Medium | Medium | P2 — Useful |
| Voice in entry | Viết khó khi cảm xúc mạnh | Low-friction capture | Occasional | Medium | High | P2 — Useful |
| Group task | Cần hành động chung | Accountability | Goal cycles | Medium | High | P2 — Useful |
| Group chat | Cần trao đổi | Coordination/support | Variable | Low/Medium | High | P2 — Useful |
| Focus timer | Muốn tập trung | Productivity utility | Variable | Low | Medium | P3 — Optional |
| Album | Muốn gom media | Memory utility | Occasional | Low | Medium | P3 — Optional |
| Public discovery/feed | Muốn tìm nội dung/người mới | Acquisition possibility | Variable | Unclear | Very high | P4 — Defer/remove |
| Leaderboard/competitive streak | Muốn thấy tiến bộ | Gamification | Daily | Risky | Medium | P4 — Defer/remove |

### Features that define Kokoro

**[INFERENCE]** Private journal entry, reflection theo ngày, personal memory và khả năng chia sẻ có chọn lọc vào group là các feature định nghĩa sản phẩm. Nếu bỏ journal, Kokoro không còn core value; nếu bỏ group, Kokoro vẫn là journal nhưng mất differentiator tiềm năng.

### Features that strengthen Kokoro

Calendar/timeline, mood quick entry, reflection summary, light/dark mode và group support đều làm core loop rõ hơn mà không nhất thiết tạo product mới.

### Features that risk feature creep

Focus, task management tổng quát, album độc lập, public feed, chat như messenger, leaderboard và hệ thống habit đầy đủ. Chúng giải quyết problem khác và dễ tạo tab/navigation riêng.

### Features that could become separate products

**[RECOMMENDATION]** Focus/productivity, habit/task manager, public community và media album có thể trở thành các sản phẩm hoặc module riêng. Không nên đưa chúng vào core chỉ vì chúng có thể “bổ sung” cho journal.

## 9. Mood

### Mood nên đóng vai trò nào?

**[INFERENCE]** Dựa trên `review.md`, mood phù hợp nhất là **quick check-in + metadata của journal entry + daily state**, không phải một sản phẩm analytics độc lập và cũng không nên mặc định là object chia sẻ nhóm. Mood giúp user bắt đầu nhanh; journal mới chứa ngữ cảnh và ý nghĩa.

### Cấu trúc logic đề xuất

**[RECOMMENDATION]**

```text
Mood Check-in
├── Emotion label (required or optional)
├── Intensity (optional, simple scale)
├── Note / Journal content (optional)
├── Media attachment (optional, nếu được hỗ trợ)
├── Tags (optional)
├── Timestamp
├── Day reference
└── Visibility: Only Me by default
```

Không đủ thông tin trong `review.md` để kết luận Kokoro đã có image, voice, tags, intensity hoặc timestamp object riêng. Các thành phần đó ở trên là recommendation.

### 0, 1 và nhiều mood trong một ngày

- **0 mood:** Ngày đó không bị coi là thất bại. Calendar nên hiển thị trạng thái trống trung tính, không tạo cảm giác user “chưa làm đủ”.
- **1 mood:** Đây là trường hợp đơn giản nhất; mood có thể là entry đại diện cho ngày và mở rộng thành note.
- **Nhiều mood:** Nên cho phép khi cảm xúc thay đổi rõ trong ngày, nhưng UI phải phân biệt “nhiều khoảnh khắc” với “nhiều điểm số cần tối ưu”. Timeline theo timestamp phù hợp hơn việc ghi đè mood của ngày.

### Mood hay Journal là center?

**[RECOMMENDATION] Journal nên là center; Mood là quick entry/metadata.** Lý do: định vị và ngôn ngữ trong `review.md` lặp lại “ghi lại suy nghĩ, cảm xúc, sự kiện, khoảnh khắc” và “nhật ký”. Nếu Mood là center, Kokoro dễ bị so sánh trực tiếp với mood tracker và mất chiều sâu memory/reflection.

## 10. Calendar / Memory

### Utility

Calendar giúp tìm lại entry theo ngày và trả lời “điều gì đã xảy ra vào lúc đó?”. Đây là utility cơ bản nhưng chưa đủ khác biệt nếu chỉ là date picker.

### Reflection

Calendar nên giúp user nhận ra các khoảng thời gian đã ghi, những ngày có mood/entry và các mốc họ muốn xem lại. Không nên biến reflection thành điểm số sức khỏe tinh thần nếu không có cơ sở chuyên môn.

### Emotional Memory

Calendar có thể trở thành **Visual Emotional Timeline** nếu mỗi ngày hiển thị một preview nhẹ: một màu/biểu tượng cảm xúc, số entry, thumbnail nếu user đã lưu, và một dòng trích ngắn do chính user viết. Đây là [RECOMMENDATION], chưa phải feature đã được xác nhận.

### Calendar nên hiển thị

- Ngày có entry hoặc mood.
- Preview ngắn, có kiểm soát privacy.
- Mốc do user đánh dấu là đáng nhớ.
- Cách mở nhanh entry trong ngày.
- Trạng thái không có dữ liệu theo cách trung tính.

### Calendar không nên hiển thị

- Điểm số “tốt/xấu” cho một ngày.
- Xếp hạng cảm xúc giữa các user.
- Nội dung group trộn vào private calendar mặc định.
- Streak lớn gây áp lực.
- Suy luận y tế hoặc chẩn đoán.

## 11. Group

### Group Benefits

**[FROM REVIEW]** Group cho phép người dùng cùng chia sẻ trải nghiệm, duy trì thói quen/mục tiêu, khích lệ và cảm thấy không đơn độc. **[INFERENCE]** Đây là cơ chế tạo switching cost cảm xúc: user không chỉ quay lại vì dữ liệu cá nhân mà còn vì người đồng hành.

### Group Risks

- Group vắng làm mất động lực thay vì tạo động lực.
- Group quá đông làm trải nghiệm chuyển thành feed noise.
- User có thể cảm thấy phải chia sẻ để chứng minh tiến bộ.
- Group task kéo product sang productivity.
- Chat liên tục làm mất chất tĩnh lặng của journal.

### Privacy Risks

Mood, note, photo và voice có thể chứa dữ liệu nhạy cảm. Share vào group phải là hành động chủ động, dễ hiểu và có thể thu hồi. Không được suy ra rằng một entry riêng tư trở thành shared chỉ vì user đang ở trong group.

### Moderation Risks

Nội dung có thể mang tính công kích, phán xét, spam hoặc kích hoạt cảm xúc tiêu cực. `review.md` không mô tả moderation system; đây là khoảng trống quan trọng trước khi mở group rộng.

### Social Pressure Risks

Streak, deadline, task bắt buộc và notification dồn dập có thể làm user thấy tội lỗi. Group nên khuyến khích sự hiện diện linh hoạt, không dùng shame-based copy.

### Competitive Behavior Risks

Leaderboard hoặc so sánh “ai tích cực hơn” mâu thuẫn với non-judgmental positioning. Nếu có progress, nên là progress cá nhân hoặc mục tiêu chung, không phải ranking con người.

### Notification Fatigue

Group reply, task, reminder và reflection có thể chồng lấn. User cần quyền kiểm soát theo loại thông báo, mute group và quiet hours.

### Feature Creep

Group dễ kéo theo Overview, Task, Chat, Focus, Album, Rules, Members, reactions, search, discovery và moderation. Chỉ nên xây những gì phục vụ group loop: mục tiêu chung, cập nhật ngắn, động viên và privacy rõ.

### Group có phải USP mạnh nhất không?

**[INFERENCE] Có tiềm năng là USP mạnh nhất, nhưng chưa đủ bằng chứng để khẳng định.** Group là điểm khác biệt dễ truyền thông hơn “giao diện đẹp” và có thể tạo retention/referral. Tuy nhiên, group chỉ trở thành USP khi giải quyết được một nhu cầu cụ thể tốt hơn community app thông thường: một không gian nhỏ, riêng tư, phục vụ reflection và accountability. Nếu chỉ có chat/feed chung, Kokoro sẽ là phiên bản yếu hơn của social app.

## 12. Group Architecture

### Recommended architecture

**[RECOMMENDATION]**

```text
GROUP
├── Overview
│   ├── Purpose / description
│   ├── Shared intention
│   └── Recent supportive activity
├── Check-in / Progress
│   └── Optional shared updates
├── Members
│   └── Roles and privacy context
└── Settings
    ├── Rules
    ├── Notifications
    └── Leave / report
```

Chat nên là interaction nằm trong activity/update, không mặc định là destination đầu tiên. Task chỉ nên được thêm khi group đã chứng minh nhu cầu accountability. Focus và Album nên defer.

| Group element | Phân loại | Lý do |
| --- | --- | --- |
| Group description/purpose | Core Group Feature | Giúp user biết group dành cho việc gì |
| Members | Core Group Feature | Cần để tạo context và permission |
| Shared check-in/progress | Core Group Feature | Nối group với motivation |
| Rules | Secondary | Cần khi có user-generated content |
| Chat/replies | Secondary | Hỗ trợ trao đổi nhưng không nên lấn át journal |
| Task | Optional/P2 | Chỉ khi mục tiêu yêu cầu hành động cụ thể |
| Avatar | Optional | Identity, không tạo core value |
| Focus | Potentially remove/defer | Domain productivity riêng |
| Album | Potentially remove/defer | Media collection dễ phình scope |

## 13. Permissions

### Recommended roles

- **Owner/Leader:** chịu trách nhiệm purpose, rules và quản trị thành viên.
- **Member:** tham gia, xem nội dung theo visibility, chia sẻ và phản hồi theo quyền.
- **Moderator:** [RECOMMENDATION] chỉ cần khi group đủ lớn hoặc có nội dung public/semi-public; không cần đưa vào MVP nếu group nhỏ và invite-only.

| Action | Owner/Leader | Moderator | Member |
| --- | --- | --- | --- |
| Edit group description/avatar | Yes | Optional by delegation | No |
| Edit rules | Yes | Optional | No |
| Create task/check-in prompt | Yes; optionally delegate | Optional | [RECOMMENDATION] Yes if group policy allows |
| Delete task | Yes | Optional | No, unless own task |
| Complete task/check-in | Yes | Yes | Yes, only own contribution |
| Send chat/update | Yes | Yes | Yes |
| Delete own chat/update | Yes | Yes | Yes |
| Delete another member content | Yes | Yes with reason/log | No |
| Share content | Yes | Yes | Yes, only explicitly selected own content |
| Leave group | Yes, with transfer flow | Yes | Yes |
| Remove member | Yes | Yes if delegated | No |
| Report content/member | Yes | Yes | Yes |

**[RECOMMENDATION]** Permission model phải đi cùng audit-friendly feedback: khi content bị xóa hoặc member bị remove, UI cần giải thích ngắn gọn và có report/appeal path phù hợp. Không cần database design để quyết định nguyên tắc này.

## 14. Privacy

### Visibility model

**[RECOMMENDATION]**

```text
🔒 Only Me — mặc định cho Mood, Journal, Photo, Voice
👥 Group — chỉ khi user chủ động chọn group và nội dung
🌐 Public — không nên có trong MVP; chỉ cân nhắc sau khi có trust, moderation và policy rõ
```

### Mood mặc định nên private hay shared?

**Private by default.** Mood là dữ liệu cảm xúc và có thể được ghi nhanh trong trạng thái dễ tổn thương. Shared phải là opt-in rõ ràng; không dùng group membership để ngầm mở quyền xem.

### Tránh chia sẻ nhầm

Khi user chia sẻ vào Group, UI nên:

1. Hiển thị rõ nội dung nào đang được chọn.
2. Hiển thị tên group và mức hiển thị ngay cạnh nút xác nhận.
3. Tách hành động “Save privately” và “Share to Group”; không dùng một nút mơ hồ.
4. Cảnh báo nếu entry có photo/voice/note đi kèm.
5. Cho phép xem preview trước khi gửi.
6. Sau khi gửi, cho biết ai có thể xem và cho phép thu hồi/xóa theo policy.

### Visibility inheritance

**[RECOMMENDATION]** Note, photo và voice không nên âm thầm kế thừa visibility của Mood nếu việc đó làm user khó hiểu. Có thể dùng quy tắc “một entry có một visibility state” để giảm lỗi, nhưng UI phải cho user thấy tất cả attachment sẽ đi cùng phạm vi đó trước khi confirm. Nếu cho phép từng attachment có visibility khác nhau, complexity và rủi ro chia sẻ nhầm tăng mạnh; không nên ở MVP.

### Privacy gaps

Không đủ thông tin trong `review.md` để kết luận về export, delete account, data retention, encryption, backup, access logs, blocking, reporting hoặc legal compliance. Đây là các câu hỏi P0/P1 trước khi mở rộng group.

## 15. Mental Wellness Safety

Kokoro nên đứng ở vùng **self-reflection** và **well-being support**. Nó có thể giúp người dùng ghi nhận cảm xúc, viết ra suy nghĩ, nhìn lại hành trình và tìm sự động viên. Nó không nên được định vị là therapy, diagnosis, medical treatment hay công cụ thay thế chuyên gia.

### Claims nên dùng

- “Tạo một khoảng lặng để viết và nhìn lại mỗi ngày.”
- “Ghi lại cảm xúc và hành trình theo cách riêng của bạn.”
- “Tìm kiếm sự đồng hành trong một nhóm phù hợp.”
- “Hỗ trợ xây dựng thói quen tự quan sát và chăm sóc bản thân.”
- “Một không gian riêng tư cho những điều trong lòng.”

### Claims nên tránh

- “Chữa khỏi trầm cảm/lo âu.”
- “Chẩn đoán tâm trạng.”
- “Thay thế trị liệu hoặc bác sĩ.”
- “Kokoro biết chính xác bạn đang bị gì.”
- “Luôn hạnh phúc nếu dùng mỗi ngày.”
- “Bạn sẽ thất bại nếu bỏ streak hoặc không hoàn thành task.”

**[RECOMMENDATION]** Nếu có nội dung cho thấy user đang gặp nguy hiểm, cần có safety policy và escalation flow do người có chuyên môn thiết kế. `review.md` không cung cấp crisis flow; không nên tự tuyên bố Kokoro đã giải quyết vấn đề này.

## 16. UX Principles

**[INFERENCE]** Từ ngôn ngữ “gần gũi”, “riêng tư”, “không bị phán xét”, “nhẹ nhàng”, “sổ tay — nhật ký” và “khích lệ”, triết lý UX nên là calm, human, private, reflective và low-friction.

### UX Principles

1. **Một entry phải bắt đầu được trong vài giây.** Quick capture quan trọng hơn form đầy đủ.
2. **Journal là trung tâm, mood là cửa vào.** Không để một con số thay thế câu chuyện của user.
3. **Private by default.** User phải biết rõ ai được xem trước khi chia sẻ.
4. **Không phán xét.** Empty state, reminder và error copy không dùng shame hoặc guilt.
5. **Reflection thay vì tối ưu bản thân.** Dữ liệu giúp hiểu mình, không biến cảm xúc thành điểm số.
6. **Group là opt-in.** Người dùng có thể nhận value cá nhân mà không cần social.
7. **Calm information hierarchy.** Mỗi màn hình nên có một hành động chính.
8. **Progress cá nhân, không xếp hạng con người.** Tránh cạnh tranh không cần thiết.
9. **Sự riêng tư phải nhìn thấy được.** Icon, label và confirmation phải rõ, không giấu trong settings.
10. **Mỗi feature phải phục vụ ghi lại, nhìn lại hoặc đồng hành.** Nếu không, defer.

## 17. Visual Identity

### Kokoro nên trông giống gì?

**[RECOMMENDATION]** Kokoro nên trông giống một **journal app hiện đại có lớp private community**, không phải productivity app và không phải social feed. Notebook/diary là ngôn ngữ thị giác; group là lớp chức năng được đặt trong cùng hệ cảm xúc.

### Typography

- Chữ nội dung phải ưu tiên đọc lâu, có nhịp và khoảng thở.
- Có thể dùng một display style mềm cho tiêu đề, nhưng body cần rõ ràng và accessible.
- [RECOMMENDATION] Không dùng typography quá “trẻ con” hoặc handwritten ở mọi nơi vì làm giảm độ tin cậy.

### Spacing và card philosophy

- Khoảng trắng đủ để entry cảm giác như trang giấy.
- Card dùng để nhóm ngữ cảnh, không biến mọi thứ thành dashboard.
- Entry dài nên ưu tiên typography và reading flow hơn badge.

### Illustration, photography, motion

- Illustration nên ấm, trừu tượng vừa phải và không diễn giải cảm xúc thay user.
- Photography nên đời thường, chân thật, tránh stock image quá hoàn hảo.
- Motion chậm và tinh tế; không dùng confetti hoặc animation ăn mừng khi user đang ghi cảm xúc buồn.

### Empty states

Empty state nên mở lời, không chấm điểm: “Hôm nay bạn muốn giữ lại điều gì?” thay vì “Bạn chưa hoàn thành nhật ký”.

### Dark mode atmosphere

**[FROM REVIEW]** Dark mode mang cảm giác sâu lắng, riêng tư và dễ chịu. **[RECOMMENDATION]** Nên giảm contrast gắt, giữ hierarchy rõ và không dùng màu tối để tạo cảm giác u buồn hoặc lâm sàng.

### Light mode atmosphere

**[FROM REVIEW]** Light mode mang cảm giác tươi mới, rõ ràng và giàu năng lượng. **[RECOMMENDATION]** Cần tránh quá chói hoặc quá “productivity”; sự tươi mới vẫn phải giữ được tính an toàn và yên tĩnh.

## 18. Home

### Home nên trả lời

- Hôm nay mình cảm thấy thế nào?
- Mình muốn giữ lại điều gì?
- Mình có thể bắt đầu bằng hành động nhỏ nào?
- Có hoạt động group nào thật sự liên quan không?

### Information hierarchy đề xuất

```text
Home
├── Greeting / calm context
├── Primary CTA: Write today
├── Optional quick mood check-in
├── Today's entry or gentle empty state
├── Continue reflection / recent memory
└── Group activity summary (only if relevant)
```

### Không nên đưa lên Home

- Nhiều KPI, streak hoặc score.
- Feed group không liên quan.
- Task productivity mặc định.
- Hàng loạt CTA ngang hàng.
- Mood analytics khiến user cảm thấy bị đánh giá.

**[INFERENCE]** Home phải bảo vệ “private pause” trước khi hiển thị social activity. Nếu group chiếm màn hình đầu tiên, Kokoro sẽ truyền thông điệp rằng user cần phục vụ cộng đồng trước khi lắng nghe bản thân.

## 19. Navigation

### Primary destinations tối đa 5

**[RECOMMENDATION]**

```text
Home | Calendar | Write | Groups | Me
```

- **Home:** điểm vào và daily context.
- **Calendar:** memory/reflection.
- **Write:** hành động core, nên nổi bật ở giữa hoặc FAB tùy platform.
- **Groups:** private community/accountability.
- **Me:** settings, privacy, profile và personal preferences.

Mood không cần tab riêng nếu nó là quick check-in; có thể nằm trong Write. Task, Chat, Focus và Album không nên là primary tab trong giai đoạn đầu. Chat nên nằm trong context của Group, Calendar là nơi reflection chứ không phải chỉ date picker.

## 20. Onboarding

### First launch

User cần hiểu ba điều: Kokoro là không gian riêng để ghi lại; có thể bắt đầu rất ngắn; group là lựa chọn đồng hành chứ không bắt buộc.

### First value moment

**[RECOMMENDATION]** First value moment là lưu được entry đầu tiên trong vòng một phút, sau đó nhìn thấy entry đó như một trang đầu tiên trong hành trình.

### Activation Event

**Primary activation:** `First Journal Entry Saved`.

**Secondary activation:** `Return to the saved entry/timeline` hoặc `Create/Join a relevant private group` sau khi user đã hiểu journal.

### Onboarding flow

1. Giới thiệu ngắn về private reflection.
2. Cho user chọn light/dark hoặc system default.
3. Mời viết một dòng; cho phép skip mà không phán xét.
4. Xác nhận entry đang private.
5. Sau value moment mới giới thiệu group.

Không đủ thông tin trong `review.md` để kết luận về login flow, permission prompt hoặc account recovery.

## 21. Empty States

| State | Copy philosophy | Suggested direction |
| --- | --- | --- |
| No mood | Trung tính, mời gọi | “Bạn muốn bắt đầu bằng một cảm xúc hay một dòng nhật ký?” |
| No calendar history | Không làm user thấy thiếu | “Những ngày bạn muốn nhớ sẽ bắt đầu từ hôm nay.” |
| No group | Không thúc ép social | “Khi sẵn sàng, bạn có thể tìm một nhóm đồng hành.” |
| No task | Không mặc định phải làm task | “Chưa có mục tiêu chung nào — bạn có thể chỉ viết và chia sẻ khi muốn.” |
| No chat | Không tạo cảm giác group chết | “Hãy bắt đầu bằng một lời chào hoặc một chia sẻ nhỏ.” |
| No photo | Nói rõ là tùy chọn | “Bạn có thể thêm hình ảnh nếu nó giúp lưu giữ ngày hôm nay.” |
| No voice | Không biến thành thiếu tính năng | “Không muốn gõ? Bạn có thể ghi lại bằng giọng nói nếu tính năng được bật.” |

**[RECOMMENDATION]** Empty state phải cho phép “do nothing” mà không tạo guilt. Đây là khác biệt quan trọng giữa emotional product và productivity dashboard.

## 22. Notifications

`review.md` không nói notification system. Mọi nội dung phần này là `[RECOMMENDATION]`.

### Có thể hữu ích

- Mood/journal reminder do user tự chọn giờ và tần suất.
- Group response hoặc lời động viên có liên quan.
- Một prompt reflection định kỳ, không phải hàng ngày bắt buộc.
- Group task nếu user đã opt-in.

### Có nguy cơ gây hại

- “Bạn chưa viết hôm nay” mang tính trách móc.
- Nhắc streak bị đứt.
- Nhiều reply/group/task cùng lúc.
- Notification đêm khuya về nội dung cảm xúc.
- Social ranking hoặc urgency giả.

### Policy đề xuất

User cần opt-in theo category, mute group, quiet hours và quyền tắt toàn bộ. Notification nên dẫn vào một hành động nhỏ, không mở một dashboard phức tạp.

## 23. Scope

### Domain map

| Domain | Vai trò | Khuyến nghị |
| --- | --- | --- |
| Journal | Core identity | KEEP |
| Mood | Entry point/metadata | KEEP, simplify |
| Calendar | Reflection/memory | KEEP |
| Media | Memory enrichment | DEFER hoặc giới hạn |
| Voice | Low-friction capture | DEFER |
| Focus | Productivity | DEFER |
| Task | Group accountability | SIMPLIFY, thử sau |
| Group | Differentiator | KEEP, giới hạn scope |
| Chat | Group coordination | MERGE vào group activity |
| Album | Media collection | DEFER |
| Habit | Có thể là outcome | Không xây full system sớm |
| Community | Group nhỏ, private | KEEP dưới Group |
| Mental wellbeing | Brand context | Giữ ở self-care, không medicalize |
| Analytics | Reflection nhẹ | DEFER nếu chưa có dữ liệu tốt |

### Kokoro có đang thành Super App quá sớm không?

**[INFERENCE] Có nguy cơ cao.** Danh sách domain rộng hơn một core loop journal. Scope control cần dựa vào “nếu bỏ feature này, Kokoro có mất giá trị cốt lõi không?”. Nếu câu trả lời là không, feature không được tự động nằm trong P0.

### KEEP

Private journal, quick mood entry, day/timeline, calendar reflection, light/dark mode, private group cơ bản.

### SIMPLIFY

Mood thành quick check-in; group thành purpose + shared check-in + support; chat thành replies trong activity; task thành optional group prompt.

### MERGE

Mood + Journal Entry; Calendar + Memory Timeline; Group Activity + Chat/Replies.

### DEFER

Voice, full task manager, focus timer, album, public discovery, advanced analytics, gamification.

### REMOVE / AVOID

Leaderboard cảm xúc, public mood mặc định, claim chẩn đoán, notification mang tính shame và bất kỳ feature nào tạo cạnh tranh trực tiếp trong self-reflection.

## 24. MVP

### Kokoro MVP — 6 core capabilities

1. **Private journal entry:** chứng minh core job và tạo personal attachment.
2. **Quick mood check-in gắn với entry:** giảm ma sát khi bắt đầu.
3. **Today/timeline view:** khiến sản phẩm có cảm giác nhật ký thay vì form lưu dữ liệu.
4. **Calendar/memory view cơ bản:** tạo lý do quay lại dài hạn.
5. **Light/dark mode:** đáp ứng trải nghiệm sổ tay theo ngữ cảnh sử dụng.
6. **Invite-only group với shared check-in và support:** thử nghiệm differentiator mà không mở community quá sớm.

### Kokoro V1

**[RECOMMENDATION]** V1 nên thêm reflection summary nhẹ, group rules, mute/report, privacy confirmation, optional reminders và một cơ chế shared goal rất đơn giản. Mỗi feature phải được gắn vào loop, không tạo product mới.

### Kokoro V2

Chỉ xem xét photo/voice, nhiều mood trong ngày, group task nâng cao hoặc analytics cá nhân sau khi có evidence rằng journal loop đã được sử dụng đều và user yêu cầu rõ.

### Future

Public community, focus/productivity, full habit system, album độc lập, AI interpretation và gamification cạnh tranh chưa có cơ sở để đưa vào roadmap. Chúng chỉ nên quay lại backlog khi có problem evidence, không phải vì nghe hấp dẫn.

## 25. Product Architecture

```text
                              KOKORO
                                 │
             ┌───────────────────┼───────────────────┐
             │                   │                   │
        CORE PERSONAL        MEMORY LAYER       SOCIAL LAYER
             │                   │                   │
       Journal Entry        Day / Calendar       Private Group
             │                   │                   │
       Mood Check-in       Timeline / Review    Shared Check-in
             │                   │                   │
       Visibility State     Reflection Summary   Support / Replies
             │                   │                   │
             └───────────────────┼───────────────────┘
                                 │
                         SUPPORTING / UTILITY
                                 │
                     Theme · Reminder · Settings
```

### Core Layer

Journal Entry, Mood Check-in, Day/Timeline và Visibility. Đây là layer cần chứng minh trước.

### Supporting Layer

Calendar reflection, media attachment nếu cần, light/dark, personal settings.

### Social Layer

Private Group, shared check-in, support/replies, group rules và membership.

### Utility Layer

Reminder, notification preferences, report, block, export/delete nếu được xác định trong policy.

**[RECOMMENDATION]** Mọi object social phải tham chiếu tới một hành động hoặc nội dung cá nhân rõ ràng. Không nên xây social graph độc lập trước khi personal loop có giá trị.

## 26. Domain Objects

| Object | Purpose | Relationship | Ownership | Visibility |
| --- | --- | --- | --- | --- |
| User | Chủ thể trải nghiệm | Sở hữu entry, tham gia group | User | Account/private |
| Day | Container theo ngày | Nhóm mood/entry trong cùng ngày | User | Private |
| Journal Entry | Nội dung reflection | Có thể gắn mood/media/day | User | Only Me mặc định |
| Mood Check-in | Snapshot cảm xúc | Có thể là metadata của entry | User | Only Me mặc định |
| Media | Ảnh/voice bổ sung | Thuộc entry | User | Kế thừa/được xác nhận rõ |
| Calendar/Timeline Item | Cách trình bày dữ liệu | Đọc từ Day/Entry | Derived | Theo nguồn |
| Group | Không gian đồng hành | Có members/shared content | Group owner | Invite/private mặc định |
| Group Membership | Vai trò trong group | Nối User và Group | Group policy | Group |
| Shared Update | Phần user chọn chia sẻ | Tham chiếu entry hoặc nội dung mới | User | Group |
| Reply/Support | Tương tác hỗ trợ | Nằm trong shared update | Author | Group |
| Task/Prompt | Optional mục tiêu chung | Thuộc group, không phải journal core | Group | Group |
| Notification Preference | Kiểm soát re-engagement | Thuộc User/Group | User | Private |

`review.md` không xác nhận object Voice, Focus Session, Album, Message độc lập hay Analytics. Không nên coi chúng là domain bắt buộc trong architecture hiện tại.

## 27. User Journeys

### Journey 1 — User mở app và ghi Mood

- **Entry:** Có cảm xúc cần gọi tên nhưng không muốn viết dài.
- **Steps:** Mở Home → chọn quick mood → tùy chọn thêm một dòng → xem privacy → lưu.
- **Success:** Mood được lưu private và user hiểu đây là bước đầu của journal.
- **Possible friction:** Chọn quá nhiều emotion; không biết mood có được chia sẻ không.
- **Potential improvement:** Một tap để bắt đầu, privacy label luôn hiện, cho phép viết sau.

### Journey 2 — User xem lại một ngày cũ

- **Entry:** Muốn nhớ lại sự kiện hoặc nhìn lại cảm xúc.
- **Steps:** Mở Calendar → chọn ngày → xem preview → mở full entry → quay về timeline.
- **Success:** User cảm nhận được ký ức và hiểu hơn về hành trình.
- **Possible friction:** Calendar trống, preview nghèo, dữ liệu lộn xộn.
- **Potential improvement:** Visual emotional timeline, filter theo entry nhưng không biến thành analytics nặng.

### Journey 3 — User có nhiều Mood trong một ngày

- **Entry:** Cảm xúc thay đổi theo các sự kiện khác nhau.
- **Steps:** Tạo mood lần đầu → sau đó tạo entry thứ hai → timeline hiển thị nhiều timestamp → user chỉnh visibility từng entry nếu cần.
- **Success:** Không mất dữ liệu và không khiến user nghĩ phải chọn một mood “đúng” cho cả ngày.
- **Possible friction:** UI overwrite hoặc tổng hợp thành một score duy nhất.
- **Potential improvement:** Hiển thị “nhiều khoảnh khắc hôm nay”, không xếp hạng cảm xúc.

### Journey 4 — User vào Group và hoàn thành Task/Prompt

- **Entry:** Muốn duy trì mục tiêu cùng người khác.
- **Steps:** Nhận lời mời → đọc purpose/rules → tham gia → xem prompt chung → đăng shared check-in → nhận support.
- **Success:** User hiểu group dùng để làm gì và có một hành động nhỏ cùng cộng đồng.
- **Possible friction:** Bị ép tạo task, không rõ nội dung nào private, group quá nhiều tab.
- **Potential improvement:** Purpose-first onboarding và shared check-in trước task manager.

### Journey 5 — User chia sẻ/tương tác trong Group

- **Entry:** Muốn được động viên hoặc chia sẻ tiến độ.
- **Steps:** Chọn nội dung → chọn group → preview phạm vi → confirm → nhận reply/support → có thể thu hồi.
- **Success:** User chia sẻ có chủ ý và cảm thấy an toàn.
- **Possible friction:** One-tap share nhầm; không có report/mute; reply gây phán xét.
- **Potential improvement:** Explicit confirmation, permission copy và safety/moderation controls.

## 28. Personas

| Persona | Need fit | Product fit | Growth potential | Retention potential | Priority |
| --- | --- | --- | --- | --- | --- |
| Students | High | High | High via peer groups | Medium/High | Secondary |
| Young adults | High | High | High | High | Primary |
| Busy workers | High for quick reflection | High if low friction | Medium | High if memory value strong | Primary/Secondary |
| Mental-wellbeing interested | High | High with safety boundary | Medium | High | Secondary |
| Habit builders | Medium/High | Medium; group useful | High | Medium/High | Secondary |

### Primary Persona

**[RECOMMENDATION]** Young adults có nhu cầu hiểu bản thân, thích trải nghiệm cá nhân và có khả năng hình thành group nhỏ là primary persona. Họ khớp với cả journal và connection, nhưng chưa đòi hỏi Kokoro phải trở thành productivity suite.

### Secondary Persona

Busy workers và students là secondary: một nhóm cần quick reflection, nhóm kia có tiềm năng group/accountability.

### Do Not Target Yet

**[RECOMMENDATION]** Không target đại trà người dùng đang tìm therapy/diagnosis, power users cần task/focus manager đầy đủ, hoặc người dùng muốn public social discovery. Những nhu cầu này làm lệch positioning và tăng risk.

## 29. Competitive Positioning

Không có web research và không nêu tên competitor cụ thể. So sánh dưới đây là cạnh tranh theo concept.

| Concept cạnh tranh | Kokoro cần học | Kokoro cần tránh |
| --- | --- | --- |
| Journal apps | Reading flow, personal attachment | Chỉ là nơi lưu text không có reflection |
| Mood trackers | Quick check-in, history | Biến đời sống thành score/analytics |
| Habit apps | Nhắc và accountability rõ | Shame, streak pressure, task overload |
| Private social apps | Small-group trust, identity | Feed noise, engagement bait |
| Productivity apps | Clear action | Mất tính tĩnh lặng và cảm xúc |

### Kokoro phải tránh trở thành phiên bản yếu hơn của loại app nào?

**[INFERENCE]** Tránh trở thành một productivity app yếu hơn về task/focus hoặc một social app yếu hơn về chat/feed. Kokoro chỉ có lợi thế khi kết nối journal riêng tư với group đồng hành theo ngữ cảnh.

## 30. Differentiation

| Yếu tố | Unique | Valuable | Defensible | Easy to communicate | Easy to copy | Đánh giá |
| --- | --- | --- | --- | --- | --- | --- |
| Mood + Journal | Medium | High | Low | High | High | Supporting differentiator |
| Calendar memory | Medium | High | Medium | Medium | Medium | Strong retention layer |
| Notebook aesthetic | Low/Medium | Medium | Low | High | High | Brand expression |
| Group | Medium/High | High | Medium nếu trust/network | High | Medium | Primary candidate |
| Task | Low | Medium | Low | Medium | High | Không nên lead |
| Focus | Low | Medium | Low | High | High | Distractor |
| Private community | High nếu thực thi tốt | High | Medium/High | High | Medium | Strong candidate |
| Light/Dark emotional design | Low/Medium | Medium | Low | Medium | High | UX support |

### Primary Differentiator

**[RECOMMENDATION]** Private reflection + small-group accountability: viết cho riêng mình, chỉ chia sẻ phần muốn chia sẻ, và nhận đồng hành trong một nhóm có mục đích.

### Secondary Differentiator

Calendar/memory được thiết kế như visual emotional timeline chứ không chỉ là nơi chọn ngày.

## 31. Brand

### Brand Promise

**[INFERENCE]** Kokoro trao cho người dùng một không gian nhẹ nhàng để ghi lại điều trong lòng, nhìn lại hành trình và không phải đi một mình khi muốn được đồng hành.

### Brand Personality

Ấm áp, tĩnh, chân thật, khích lệ, riêng tư, không phán xét.

### Brand Emotion

Nhẹ lòng, được lắng nghe, bình yên, có hy vọng và có người cùng bước.

### Brand Voice

Ngắn, tử tế, không áp đặt, không clinical, không hô hào quá mức. Dùng “bạn có thể”, “khi bạn sẵn sàng”, “một dòng cũng được” thay cho “bạn phải”.

### Brand Keywords

`private`, `journal`, `reflection`, `gentle`, `together`, `memory`, `support`, `small steps`.

### What Kokoro should feel like

Một cuốn sổ tay kỹ thuật số biết tôn trọng khoảng riêng, có cánh cửa mở sang một nhóm nhỏ khi user muốn được đồng hành.

### What Kokoro should never feel like

Corporate, clinical, competitive, overly gamified, judgmental, noisy, hoặc ép user phải chia sẻ để nhận value.

## 32. Marketing

### Đánh giá message hiện có

| Message | Strong | Generic | Emotional | Differentiated | Memorable |
| --- | --- | --- | --- | --- | --- |
| “Viết xuống điều trong lòng...” | Yes | Medium | High | Medium/High | High |
| “Mỗi ngày một trang, mỗi bước một thay đổi.” | Yes | Medium | Medium | Medium | High |
| “Góc nhỏ cho cảm xúc, cộng đồng cho hành trình.” | Yes | Low/Medium | High | High | High |
| “Không chỉ là nhật ký, đó là hành trình của bạn.” | Medium | High | Medium | Low | Medium |

### Strongest existing tagline

**“Góc nhỏ cho cảm xúc, cộng đồng cho hành trình.”** Câu này nối được personal và group, là hai cực quan trọng nhất của concept.

### Strongest CTA

**“Bắt đầu trang nhật ký đầu tiên cùng Kokoro.”** CTA rõ, ít áp lực và dẫn thẳng tới activation.

### Strongest product message

**“Không cần viết hoàn hảo, chỉ cần thành thật với chính mình.”** Nó giải quyết friction bắt đầu và đúng tinh thần non-judgmental.

### Đề xuất thêm tối đa 5 câu

1. “Giữ lại hôm nay theo cách chỉ bạn hiểu.”
2. “Một dòng cho riêng bạn, một hành trình để nhìn lại.”
3. “Viết khi muốn, chia sẻ khi sẵn sàng.”
4. “Cảm xúc là của bạn; sự đồng hành cũng vậy.”
5. “Kokoro — nơi những bước nhỏ được lắng nghe.”

## 33. Growth Loop

### Group organic growth loop

```text
User tạo group nhỏ có purpose rõ
        ↓
Mời bạn bè/người cùng mục tiêu
        ↓
Người được mời cài Kokoro và hiểu private context
        ↓
Mỗi người tạo journal/check-in riêng
        ↓
Chia sẻ một update có chủ ý vào group
        ↓
Nhận support và tiếp tục quay lại
        ↓
Group có giá trị → lời mời tự nhiên hơn
```

### Acquisition

Lời mời nhóm có context là acquisition channel tiềm năng. Không đủ thông tin để kết luận conversion hoặc scale.

### Activation

Invitee phải hiểu group purpose và lưu được entry đầu tiên; nếu chỉ vào chat mà chưa hiểu journal, activation yếu.

### Retention

Retention đến từ group activity có ý nghĩa và personal history tích lũy. Group vắng hoặc notification noise sẽ phá loop.

### Referral

Referral nên là invite-to-purpose, không phải share public content. [RECOMMENDATION] Link mời cần nói rõ group, privacy và quyền rời nhóm.

## 34. Risks

| Risk | Type | Severity | Likelihood | Why | Mitigation |
| --- | --- | --- | --- | --- | --- |
| Core value không rõ giữa journal/group | Product | High | High | Nhiều domain cùng tranh vị trí | Chọn journal-first thesis và KPI activation |
| User không biết mở app để làm gì | UX | High | High | Home có thể có quá nhiều CTA | Một primary action: write/reflection |
| Form ghi nhật ký quá dài | UX | High | Medium | Tăng friction hằng ngày | Quick entry, progressive detail |
| Mood biến thành score phán xét | Product/Brand | High | Medium | Mất emotional safety | Mood là metadata, không ranking |
| Scope phình thành super app | Scope | High | High | Task/chat/focus/album kéo domain | P0/P1 gate và kill criteria |
| Share nhầm note/photo/voice | Privacy | Critical | Medium | Nội dung cảm xúc nhạy cảm | Private default, preview, explicit confirm |
| Group toxic hoặc phán xét | Community | Critical | Medium | Social support có thể đảo chiều | Rules, report, moderation, invite-only |
| Group vắng | Retention | High | Medium | Không có immediate social reward | Giới hạn group, seed prompt, activity design |
| Notification fatigue | UX/Growth | High | High | Nhiều domain có thể gửi alert | Per-category opt-in, quiet hours |
| Claim y tế quá mức | Brand/Trust | Critical | Medium | User có thể hiểu đây là treatment | Well-being wording và safety review |
| Public social mở quá sớm | Privacy/Growth | High | Medium | Tăng moderation và exposure | Defer public visibility |
| Leaderboard gây so sánh | Brand/Product | High | Medium | Mâu thuẫn non-judgmental | Không ranking; progress cá nhân |
| Dữ liệu lịch sử khó tìm lại | UX/Retention | High | Medium | Memory value không xuất hiện | Visual timeline và preview |
| Không có hành động quay lại D1 | Retention | High | Medium | Entry đầu tiên không nối entry sau | Gentle reflection reminder |
| Feature không có evidence | Product | Medium/High | High | Xây theo giả định | Discovery interview + experiment gate |
| Chat lấn át journal | UX/Scope | High | Medium | Group trở thành messenger | Contextual replies, không chat-first |
| Attachment tăng complexity | Technical/Product | Medium | Medium | Media/voice cần lifecycle rõ | Defer hoặc chỉ gắn entry |
| Quyền group không rõ | Privacy/Community | High | Medium | Người dùng không biết ai chỉnh/xóa | Role policy và explanatory UI |
| Không có cơ chế rời/xóa/export | Trust | High | Unknown | Dữ liệu cá nhân cần quyền kiểm soát | Xác định policy trước launch rộng |
| Người dùng bỏ cuộc vì streak đứt | Retention/Well-being | Medium/High | Medium | Gamification tạo guilt | Không dùng streak làm core reward |

## 35. Contradictions

| Tension | Đánh giá | Cách giải quyết |
| --- | --- | --- |
| Private journal vs social group | Complement nhưng dễ conflict | Journal private-first; group opt-in và object shared riêng |
| Calm app vs productivity tasks | Conflict nếu task là center | Task chỉ là group prompt nhỏ, không xây productivity suite |
| Reflection vs focus timer | Khác job | Defer focus; không đưa vào core navigation |
| Emotional safety vs community interaction | Complement có điều kiện | Moderation, mute, report, tone và privacy rõ |
| Simple UX vs nhiều feature | Conflict | Chỉ một primary action/screen; merge domain |
| Motivation vs social pressure | Hai mặt | Khích lệ, không ranking/deadline shame |
| Memory richness vs privacy | Cần cân bằng | Metadata/preview tối thiểu và private default |
| Light/dark personalization vs brand consistency | Complement | Giữ chung typography, spacing và voice; đổi atmosphere |

Các tension này không tự động là lỗi. Chúng yêu cầu product boundaries và UX separation rõ ràng.

## 36. Open Questions

### Critical

1. Kokoro muốn primary user là ai trong giai đoạn đầu?
2. Activation chính là first journal entry hay first mood check-in?
3. Journal có luôn là private by default không?
4. Mood có phải một entry độc lập hay metadata của journal?
5. Một ngày có cho phép nhiều mood/entry không?
6. Group là invite-only, private searchable hay public?
7. User có thể share một phần entry vào group không?
8. Khi share, note/photo/voice có cùng visibility không?
9. Ai được report, xóa hoặc ẩn content trong group?
10. Có cần Moderator ngay từ launch group không?
11. Group có mục tiêu chung cụ thể hay chỉ là community theo chủ đề?
12. Task có thật sự cần trong MVP không?
13. Kokoro có cho user export và xóa dữ liệu không?
14. Chính sách lưu trữ và xóa dữ liệu cảm xúc là gì?
15. Có policy cho nội dung nguy cơ tự hại hoặc crisis không?

### Important

16. User có thể chỉnh sửa mood sau khi lưu không?
17. Calendar hiển thị preview nào mà không lộ dữ liệu nhạy cảm?
18. Có cần search entry hay chỉ timeline/calendar?
19. Reflection summary do rule-based hay do user tự đọc lại?
20. Group tối đa bao nhiêu thành viên để vẫn giữ cảm giác nhỏ?
21. Group member mới đọc được lịch sử cũ đến mức nào?
22. User có thể mute riêng một group không?
23. Reply có reaction không, hay chỉ text support?
24. Có cho phép anonymous trong group không?
25. Điều gì xảy ra khi Owner rời group?
26. Có cho phép shared update tự động biến mất sau thời gian không?
27. Có cần block user và report content ở MVP không?
28. Notification nào opt-in và quiet hours mặc định ra sao?
29. Có sử dụng streak không; nếu có, copy và reset behavior thế nào?
30. Photo/voice có cần cho activation đầu tiên không?
31. Dark mode do user chọn hay theo system?
32. Có persona nào sẵn sàng mời bạn bè vào group không?
33. Group tạo acquisition hay chỉ là retention feature?
34. Tín hiệu nào chứng minh group là USP chứ không chỉ là feature phụ?
35. Người dùng có thể sử dụng Kokoro hoàn toàn mà không tham gia group không?

### Future

36. Có cần public community sau khi trust được chứng minh không?
37. Có nên hỗ trợ nhiều ngôn ngữ/locale không?
38. Có cần template nhật ký theo chủ đề không?
39. Có cần import dữ liệu từ ứng dụng khác không?
40. Có cần media album độc lập hay chỉ cần entry attachments?
41. Có cần AI hỗ trợ prompt; nếu có, dữ liệu được xử lý ở đâu?
42. Có cần focus/habit/task product riêng không?
43. Có cần creator-led groups hoặc paid groups không?
44. Có cần analytics cho group leader không?
45. Có cần public share card cho marketing không, và privacy risk được kiểm soát thế nào?

## 37. Priority Matrix

| Feature | User Value | Strategic Value | Retention | Complexity | Risk | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Private journal | High | Critical | High | Low | Medium | DO NOW |
| Quick mood | High | High | Medium | Medium | Medium | DO NOW |
| Day/timeline | High | High | High | Medium | Low | DO NOW |
| Calendar reflection | High | High | High | Medium | Low/Medium | DO NOW |
| Privacy/share confirmation | Critical | Critical | High | Medium | Critical if absent | DO NOW |
| Invite-only group | High | High | High | High | High | DO NEXT |
| Shared check-in/support | High | High | Medium/High | Medium/High | High | DO NEXT |
| Group rules/report/mute | Critical for social | High | High | Medium/High | Critical if absent | DO NEXT |
| Optional reminder | Medium | Medium | Medium | Medium | Medium | DO NEXT |
| Photo attachment | Medium | Medium | Medium | Medium | Medium | DO LATER |
| Voice attachment | Medium | Low/Medium | Medium | High | Medium | DO LATER |
| Group task | Medium | Medium | Medium | High | Medium | DO LATER |
| Chat as separate tab | Low/Medium | Low | Low | High | High | DON'T DO |
| Focus timer | Low | Low | Low | Medium | Medium | DON'T DO |
| Public feed | Unclear | Unclear | Unclear | Very high | Critical | DON'T DO |
| Leaderboard | Low | Negative | Risky | Medium | High | DON'T DO |

## 38. Strategic Directions

### Direction A — Personal Journal First

- **Pros:** Core value rõ, dễ làm MVP, privacy tốt, journal loop dễ đo.
- **Cons:** Differentiation ban đầu có thể yếu, growth loop chậm hơn.
- **Target users:** Young adults, busy workers, self-reflection users.
- **Core loop:** Write → save → revisit → reflect.
- **Key features:** Journal, mood quick entry, timeline, calendar, privacy.
- **Risk:** Trông giống journal app nếu group bị trì hoãn quá lâu.
- **Growth potential:** Referral thấp hơn nhưng trust cao.

### Direction B — Social Accountability First

- **Pros:** Dễ tạo invite loop, motivation và group identity rõ.
- **Cons:** Moderation/privacy khó, group vắng làm value sụp, dễ thành social/task app.
- **Target users:** Habit builders, students, friend groups.
- **Core loop:** Invite → shared goal → update → support → return.
- **Key features:** Group, membership, shared check-in, support, simple prompt.
- **Risk:** Journal trở thành phụ, mất khác biệt cảm xúc.
- **Growth potential:** Cao nếu group có density và purpose tốt.

### Direction C — Hybrid Journal + Private Group

- **Pros:** Giữ core personal, có differentiator group, cân bằng retention và trust.
- **Cons:** Architecture/UX phức tạp hơn, cần privacy model rõ ngay từ đầu.
- **Target users:** Young adults muốn reflection và có group nhỏ.
- **Core loop:** Private write → optional share → support → personal reflection.
- **Key features:** Journal, mood, timeline, calendar, invite-only group, shared update.
- **Risk:** Làm cả hai nửa vời nếu scope không bị giới hạn.
- **Growth potential:** Tốt nhất nếu group là private accountability chứ không phải feed.

### Hướng được chọn

**[RECOMMENDATION] Direction C — Hybrid Journal + Private Group**, với thứ tự triển khai **Personal Journal First → Group có kiểm soát**. Đây là hướng duy nhất vừa bảo toàn core value vừa khai thác USP tiềm năng; điều kiện là group không được chiếm chỗ của journal trong activation và Home.

## 39. Final Product Definition

### Kokoro IS

- Một digital journal cho self-reflection.
- Một visual memory timeline cho hành trình cá nhân.
- Một private-by-default space cho cảm xúc và suy nghĩ.
- Một private community có mục đích để user nhận đồng hành.
- Một trải nghiệm calm, human, non-judgmental.

### Kokoro IS NOT

- Không phải therapy, diagnosis hoặc medical treatment.
- Không phải mạng xã hội công khai.
- Không phải task manager/focus app đầy đủ.
- Không phải mood score/leaderboard.
- Không phải album/media vault.
- Không phải super app chứa mọi tool tự phát triển bản thân.

### Core User

Young adult muốn hiểu bản thân hơn, ghi lại đời sống hằng ngày và có thể tham gia một group nhỏ khi cần đồng hành.

### Core Problem

Người dùng có cảm xúc và trải nghiệm muốn ghi lại nhưng thiếu một không gian đủ riêng tư, ít ma sát và có giá trị khi nhìn lại; họ cũng có thể thiếu động lực để duy trì một mình.

### Core Action

Ghi một mood hoặc journal entry ngắn, lưu private, rồi chọn lúc phù hợp để xem lại hoặc chia sẻ có chủ ý.

### Core Value

Self-understanding thông qua reflection liên tục và memory cá nhân.

### Core Loop

`Trigger → Quick/private entry → See it represented in today/timeline → Reflect later → Return`.

### Core Differentiator

Private reflection được nối với small-group accountability và support, không phải public social engagement.

### Core Retention Driver

Personal attachment tích lũy theo thời gian, được khuếch đại bởi calendar/memory và group đồng hành có ý nghĩa.

### Core Social Feature

Invite-only group với shared check-in/support, privacy rõ, không phải chat/feed tổng quát.

## 40. Score

Điểm dưới đây là đánh giá chiến lược từ tài liệu, không phải benchmark thị trường hay dữ liệu analytics.

| Dimension | Score / 10 | Giải thích |
| --- | ---: | --- |
| Product concept | 7 | Concept cảm xúc + journal + group có nền tảng, nhưng boundary còn rộng |
| Core value | 7 | Self-understanding khá rõ, cần biến thành loop đo được |
| Differentiation | 6 | Group/private reflection có tiềm năng nhưng chưa được chứng minh |
| UX direction | 8 | Notebook, calm, private và low-friction tạo hướng UX tốt |
| Retention | 6 | Memory và group có giả thuyết tốt, chưa có evidence thực tế |
| Group potential | 8 | Có thể là USP và growth loop, nhưng risk moderation cao |
| Emotional branding | 8 | Voice và imagery có độ nhất quán, dễ tạo attachment |
| Privacy model | 4 | Ý tưởng private có, nhưng policy/permission/export chưa được mô tả |
| Scope control | 4 | Nhiều domain tiềm năng dễ biến thành super app |
| Growth potential | 6 | Invite group có khả năng organic, phụ thuộc density và trust |
| Technical feasibility | 6 | MVP journal khá khả thi; social/privacy/media làm complexity tăng |
| Product clarity | 6 | Có định hướng, nhưng cần chốt journal-first và role của mood/group |

## 41. Top Recommendations

### #1 — Chốt journal-first product thesis

- **Problem:** Người dùng có thể không biết Kokoro là journal, mood tracker hay social app.
- **Recommendation:** Đặt “ghi lại — nhìn lại — đồng hành” làm boundary; journal là center.
- **Why:** Core value tự thấu hiểu chỉ xuất hiện khi journal là hành động chính.
- **Impact:** Cao cho activation, UX và scope.
- **Priority:** P0.

### #2 — Xác định activation là first private entry saved

- **Problem:** Chưa có value moment rõ.
- **Recommendation:** Thiết kế onboarding để user lưu entry đầu tiên trong một phút.
- **Why:** Giảm thời gian tới value và tạo personal attachment.
- **Impact:** Cao cho D0/D1.
- **Priority:** P0.

### #3 — Xây privacy model trước group scale

- **Problem:** Dữ liệu cảm xúc, note, photo và voice có rủi ro chia sẻ nhầm.
- **Recommendation:** Private default, explicit group sharing, preview và visibility confirmation.
- **Why:** Trust là điều kiện để user viết thật và group an toàn.
- **Impact:** Critical cho trust, safety và retention.
- **Priority:** P0.

### #4 — Biến Calendar thành memory/reflection, không chỉ date picker

- **Problem:** Lưu dữ liệu nhưng user không thấy ý nghĩa khi quay lại.
- **Recommendation:** Visual emotional timeline với preview nhẹ và privacy-safe.
- **Why:** Tạo lý do mở app ở D7/D30/D180.
- **Impact:** Cao cho long-term retention.
- **Priority:** P0/P1.

### #5 — Thử nghiệm group nhỏ, invite-only, purpose-first

- **Problem:** Group là USP tiềm năng nhưng dễ thành social noise.
- **Recommendation:** Chỉ hỗ trợ group có description/purpose, members, shared update và support.
- **Why:** Kiểm chứng group accountability mà không mở public community quá sớm.
- **Impact:** Cao cho differentiation và referral.
- **Priority:** P1.

### #6 — Giữ mood là quick entry/metadata

- **Problem:** Mood tracker có thể nuốt mất chiều sâu của journal.
- **Recommendation:** Mood bắt đầu entry; journal chứa context; hỗ trợ 0/1/nhiều mood trong ngày.
- **Why:** Giữ đúng category self-reflection và hỗ trợ low friction.
- **Impact:** Cao cho UX clarity.
- **Priority:** P0.

### #7 — Loại bỏ hoặc hoãn productivity và gamification cạnh tranh

- **Problem:** Task, focus, streak, leaderboard làm tăng scope và áp lực.
- **Recommendation:** Chỉ giữ group prompt đơn giản; defer full task/focus/ranking.
- **Why:** Bảo vệ emotional safety và product identity.
- **Impact:** Cao cho scope control.
- **Priority:** P0/P1.

### #8 — Thiết kế moderation và social safety cùng Group MVP

- **Problem:** Group support có thể trở thành toxic hoặc gây social anxiety.
- **Recommendation:** Rules, report, mute, leave, remove và copy không phán xét ngay từ bản group cơ bản.
- **Why:** Social feature không an toàn sẽ phá trust nhanh hơn feature thiếu.
- **Impact:** Critical khi có user-generated content.
- **Priority:** P0 cho Group.

### #9 — Xây notification theo opt-in và reflection nhẹ

- **Problem:** Reminder và group activity có thể gây fatigue/pressure.
- **Recommendation:** Category preferences, quiet hours, mute group, không shame-based copy.
- **Why:** Re-engagement chỉ có giá trị khi không làm user né app.
- **Impact:** Medium/High cho retention và brand.
- **Priority:** P1.

### #10 — Thiết lập product discovery gates trước mỗi domain mới

- **Problem:** Feature creep có thể biến Kokoro thành super app.
- **Recommendation:** Mỗi feature phải trả lời job, core loop, evidence, complexity, risk và lý do không thể bỏ.
- **Why:** Bảo vệ clarity và tốc độ học hỏi.
- **Impact:** Cao và liên tục.
- **Priority:** P0.

## 42. Roadmap

### Phase 1 — Stabilize Core

**Mục tiêu:** chứng minh journal/reflection loop.

- Chốt product thesis và primary persona.
- Xây private journal entry và quick mood entry.
- Xây Today/timeline và Calendar cơ bản có preview.
- Hoàn thiện light/dark mode, empty states và accessibility cơ bản.
- Xác định privacy default, edit/delete và visibility copy.
- Đo activation: first entry saved, time-to-first-entry, return to entry.

**Không làm:** public feed, full task, focus, leaderboard, chat độc lập.

### Phase 2 — Strengthen Retention

**Mục tiêu:** tạo lý do quay lại sau D1, D7 và D30.

- Cải thiện visual emotional timeline.
- Thêm reflection prompt nhẹ, user-controlled.
- Thử nghiệm reminder opt-in và quiet hours.
- Cho phép nhiều entry/mood trong ngày theo timeline rõ.
- Xác định tín hiệu personal attachment: revisit, edit, saved moments, reflection usage.

### Phase 3 — Strengthen Group

**Mục tiêu:** kiểm chứng group là USP và growth loop.

- Invite-only group có purpose, description, members và rules.
- Shared check-in/update với explicit privacy confirmation.
- Support/replies ở mức tối thiểu; không xây messenger.
- Report, mute, leave, remove và moderation workflow.
- Thử nghiệm invite loop: tạo group → mời → activation của invitee → shared update.
- Đo group activation, group activity quality, invite acceptance và retention của member.

### Phase 4 — Polish

**Mục tiêu:** chỉ mở rộng sau khi evidence xác nhận core loop.

- Cải thiện typography, motion, empty states và dark/light atmosphere.
- Cân nhắc photo/voice nếu user cần lưu memory phong phú hơn.
- Cân nhắc group prompt/task đơn giản nếu accountability evidence đủ mạnh.
- Hoàn thiện export/delete/privacy controls và trust communication.
- Chỉ mở public/community hoặc domain productivity nếu có problem evidence, owner rõ và safety model đủ trưởng thành.

### Kết luận roadmap

Thứ tự ưu tiên là **trust → core journal loop → memory retention → private group → mở rộng có bằng chứng**. Nếu một feature không cải thiện ít nhất một trong ba trục `ghi lại`, `nhìn lại`, `đồng hành`, feature đó nên ở ngoài roadmap hiện tại.
